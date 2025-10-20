import React from 'react';
import { View , Image, Text} from 'react-native';
import { styles } from '../styles';

const CityWeather = ({ weather, weatherIconMap }) => {
  return (
    <View style={styles.mainCityTemp}>
      <View style={styles.weatherInfo}>
        <View style={styles.weatherText}>
        {weather.current && weather.current.condition && (
          <Image 
          source={weatherIconMap[weather.current.condition.code]} 
          accessibilityLabel={weather.current.condition.text} 
          style={styles.currentWeatherImage}
          />
        )}
        <Text style={styles.weatherText}>{weather.location.name}, {weather.location.country}</Text>
        {weather.current && (
            <Text style={styles.weatherText}>{Math.round(weather.current.temp_c)}°C</Text>
        )}
        {weather.current && weather.current.condition && (
            <Text style={styles.weatherText}>{weather.current.condition.text}</Text>
        )}
        </View>
      </View>
    </View>
  );
};

export default CityWeather;