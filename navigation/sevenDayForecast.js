import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles';

export default function SevenDayForcast({ forecast, weatherIconMap }) {
  const days = forecast.forecast.forecastday;

  return (
    <View style={{ height: '40%', justifyContent: 'center', display: 'flex' }}>
      <View style={styles.sevenDayForecastHeader}>
        <Text style={styles.sevenDayForecastHeader}>7-day Forecast</Text>
      </View>
        <ScrollView         
        style={styles.sevenDayForecast}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          {days.map((day, index) => (
            <View key={index} style={styles.sevenDayForecastTemp}>
              <Text style={styles.sevenDayForecastTempItems}>
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </Text>
              <Image 
                source={weatherIconMap[day.day.condition.code]} 
                accessibilityLabel={day.day.condition.text} 
                style={styles.sevenDayForecastIcon}
              />
              <Text style={styles.sevenDayForecastTempItems}>
                {day.day.avgtemp_c}°C
              </Text>
            </View>
          ))}
        </ScrollView>
    </View>
  )
}