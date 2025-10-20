import React from 'react';
import { View , Image, Text, ScrollView} from 'react-native';
import { styles } from '../styles';

const HourlyForecast = ({ forecast, weatherIconMap }) => {

  const hours = forecast.forecast.forecastday.flatMap(day => day.hour || []);

  return (
    <View style={{ height: '30%', justifyContent: 'center' }}>
        <ScrollView
        style={styles.hourlyForecast}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
        {hours.map((hour) => (
            <View key={hour.time} style={styles.hourlyForecastTemp}>
                <Text style={styles.hourlyForecastTempItems}>{hour.time.slice(11, 16)}</Text>
                    <Image 
                    key={hour.condition.code}
                    source={weatherIconMap[hour.condition.code]} 
                    accessibilityLabel={hour.condition.text} 
                    style={styles.hourlyForecastIcon}
                    />
                <Text style={styles.hourlyForecastTempItems}>{hour.temp_c}°C</Text>
            </View>
        ))}
        </ScrollView>
    </View>
  );
};

export default HourlyForecast;