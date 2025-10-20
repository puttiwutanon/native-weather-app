import { View, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import { styles } from '../styles';

const MinmaxTemp = ({ forecast}) => {
  return (
    <View>
      <View style={styles.minmaxTemp}>
        <Text style={styles.weatherText}>{forecast.location.name}, {forecast.location.country}</Text>
        <View style={[{display: 'flex', flexDirection: 'row', alignSelf: 'center'}]}>
            <Text style={styles.weatherTextvalue}>max: {forecast.forecast.forecastday[0].day.maxtemp_c}°C</Text>
            <Text style={styles.weatherTextvalue}>min: {forecast.forecast.forecastday[0].day.mintemp_c}°C</Text>
        </View>
      </View>
    </View>
  )
}

export default MinmaxTemp;