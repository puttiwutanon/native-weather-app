import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import SevenDayForecast from '../sevenDayForecast'
import React from 'react';
import { Searchbar } from '../searchBar';
import MinmaxTemp from '../minmaxTemp';
import AirQuality from '../airQuality';
import SunRiseSet from '../sunRiseSet';
import UVIndex from '../uvIndex';

export default function ProfileScreen() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [location, setLocation] = useState(['Bangkok']);
  const weatherIconMap = {
    '1000': require('../../public/weather_pics/sun.png'),
    '1003': require('../../public/weather_pics/cloudy.png'),
    '1006': require('../../public/weather_pics/cloud.png'),
    '1009': require('../../public/weather_pics/cloudy (2).png'),
    '1030': require('../../public/weather_pics/mist (1).png'),
    '1063': require('../../public/weather_pics/raining.png'),
    '1066': require('../../public/weather_pics/snow.png'),
    '1069': require('../../public/weather_pics/sleet.png'),
    '1072': require('../../public/weather_pics/snow.png'),
    '1087': require('../../public/weather_pics/thunderstorm.png'),
    '1114': require('../../public/weather_pics/snow.png'),
    '1117': require('../../public/weather_pics/snow.png'),
    '1135': require('../../public/weather_pics/fog.png'),
    '1147': require('../../public/weather_pics/fog.png'),
    '1150': require('../../public/weather_pics/raining.png'),
    '1153': require('../../public/weather_pics/raining.png'),
    '1168': require('../../public/weather_pics/snow.png'),
    '1171': require('../../public/weather_pics/snow.png'),
    '1180': require('../../public/weather_pics/raining.png'),
    '1183': require('../../public/weather_pics/raining.png'),
    '1186': require('../../public/weather_pics/raining.png'),
    '1189': require('../../public/weather_pics/raining.png'),
    '1192': require('../../public/weather_pics/raining.png'),
    '1195': require('../../public/weather_pics/raining.png'),
    '1198': require('../../public/weather_pics/snow.png'),
    '1201': require('../../public/weather_pics/snow.png'),
    '1204': require('../../public/weather_pics/sleet.png'),
    '1207': require('../../public/weather_pics/sleet.png'),
    '1210': require('../../public/weather_pics/snow.png'),
    '1213': require('../../public/weather_pics/snow.png'),
    '1216': require('../../public/weather_pics/snow.png'),
    '1219': require('../../public/weather_pics/snow.png'),
    '1222': require('../../public/weather_pics/snow.png'),
    '1225': require('../../public/weather_pics/snow.png'),
    '1237': require('../../public/weather_pics/snow.png'),
    '1240': require('../../public/weather_pics/raining.png'),
    '1243': require('../../public/weather_pics/raining.png'),
    '1246': require('../../public/weather_pics/raining.png'),
    '1249': require('../../public/weather_pics/sleet.png'),
    '1252': require('../../public/weather_pics/sleet.png'),
    '1255': require('../../public/weather_pics/snow.png'),
    '1258': require('../../public/weather_pics/snow.png'),
    '1261': require('../../public/weather_pics/snow.png'),
    '1264': require('../../public/weather_pics/snow.png'),
    '1273': require('../../public/weather_pics/thunderstorm.png'),
    '1276': require('../../public/weather_pics/thunderstorm.png'),
    '1279': require('../../public/weather_pics/snowstorm.png'),
    '1282': require('../../public/weather_pics/snowstorm.png')
  };

  const fetchCurrentWeatherData = async () => {

    const promises = location.map(async (location) => {
      const url = `http://api.weatherapi.com/v1/current.json?key=d9a603874c1147ab8f543134231108&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); 
      return data;
    });

    try {
      const results = await Promise.all(promises);
      setCurrentWeather(results);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecastWeatherData = async () => {
    const promises = location.map(async (location) => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=d9a603874c1147ab8f543134231108&q=${location}&days=7&aqi=yes`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); 
      return data;
    });

    try {
      const results = await Promise.all(promises);
      setForecastWeather(results); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = (city) => {
    setSearchCity(city);
    setLocation([city]);
  };

  useEffect(() => {
    if (location.length > 0) {
      fetchCurrentWeatherData();
      fetchForecastWeatherData();
    }
  }, [location]);
    
  return (
    <ScrollView>

      <Searchbar onSearch={handleSearch}/>

      {forecastWeather.map((forecast)=>(
        <MinmaxTemp
          key={forecast.location.name}
          forecast={forecast}         
        />
      ))}

      
      {forecastWeather.map((forecast)=>(
        <SevenDayForecast 
          key={forecast.location.name}
          forecast={forecast} 
          weatherIconMap={weatherIconMap} 
        />
      ))}

      {forecastWeather.map((forecast)=>(
        <AirQuality
          key={forecast.location.name}
          forecast={forecast} 
          weatherIconMap={weatherIconMap} 
        />
      ))}

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        {forecastWeather.map((forecast)=>(
          <SunRiseSet
            key={forecast.location.name}
            forecast={forecast} 
            weatherIconMap={weatherIconMap} 
          />
        ))}

        {forecastWeather.map((forecast)=>(
          <UVIndex
            key={forecast.location.name}
            forecast={forecast} 
            weatherIconMap={weatherIconMap} 
          />
        ))}
      </View>

    </ScrollView>
  )
}