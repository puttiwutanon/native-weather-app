import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const UVIndex = ({forecast}) => {
  return (
    <> 
        <View style={styles.UVindex}>
            <View>
              <Text style={styles.UVindexHeader}><FontAwesome name="sun-o" size={24} color="#FFF" /> UV index:</Text>
              <Text style={styles.UVindexValue}>{forecast.forecast.forecastday[0].day.uv} </Text>
            </View>
        </View>
    </>
  )
}

export default UVIndex