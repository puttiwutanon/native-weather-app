import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles';
import Feather from '@expo/vector-icons/Feather';

const SunRiseSet = ({forecast}) => {
  return (
    <> 
        <View style={styles.SunRiseSet}>
            <View style={styles.sunRise}>
              <Text style={styles.sunRiseHeader}><Feather name="sunrise" size={24} color="#fff" /> Sunrise:</Text>
              <Text style={styles.sunRiseValue}>{forecast.forecast.forecastday[0].astro.sunrise} </Text>
            </View>
            <View style={styles.sunSet}>
              <Text style={styles.sunSet}>Sunset: {forecast.forecast.forecastday[0].astro.sunset} </Text>
            </View>
        </View>
    </>
  )
}

export default SunRiseSet