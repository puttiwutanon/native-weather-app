import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const AirQuality = ({forecast}) => {
  return (
    <>
        <View style={styles.aqi}>
            <Text style={styles.aqiHeader}><FontAwesome6 name="mask-face" size={24} color="#fff" /> pm2.5 level:</Text>
            <Text style={styles.aqiValue}>- {forecast.current.air_quality.pm2_5} µg/m³</Text>
        </View>
    </>
  )
}

export default AirQuality