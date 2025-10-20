import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import UVIndex from './navigation/uvIndex';



export const styles = StyleSheet.create({
  navbar:{
    height: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2d30',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 20,
    borderRadius: 40,
  },
  tabBarItemStyle: {
    borderRadius: 40,
    overflow: 'hidden',
    marginVertical: 20, 
    height: 60,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 20
  },
  todayWorkText:{
    fontFamily: 'Kanit',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    marginLeft: 24
  },
  searchbar:{
    padding: 10,
    border: "none",
    borderRadius: 12,
    top: 20,
    width: '90%',
    backgroundColor: "#2d2d30",
    color: "#fff",
    alignSelf: 'center'
  },
    searchbarInput:{
    color: "#fff",
  },
  mainCityTemp: {
    alignSelf: 'center'
  },    
  weatherInfo:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#fff'
  },
  weatherText:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    padding: 4
  },
  currentWeatherImage: {
    width: '50%',
    height: '50%',
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  hourlyForecast:{
    borderRadius: 16,
    backgroundColor: '#2d2d30',
    width: '90%',
    height: '20%',
    padding: 2,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 30,
    alignSelf: 'center',
    bottom: 100
  },
  hourlyForecastTemp:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20
  },
  hourlyForecastTempItems:{
    width: '100%',                  
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 10
  },
  hourlyForecastIcon: {
  width: '80%',
  height: '80%',
  resizeMode: 'contain',
  alignSelf: 'center',
},
  sevenDayForecast:{
    borderRadius: 16,
    backgroundColor: '#2d2d30',
    width: '90%',
    height: '20%',
    padding: 2,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 30,
    alignSelf: 'center',
  },
  sevenDayForecastTemp:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20
  },
  sevenDayForecastTempItems:{
    width: '100%',                  
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 10
  },
  sevenDayForecastIcon: {
  width: '80%',
  height: '80%',
  resizeMode: 'contain',
  alignSelf: 'center',
},

  sevenDayForecastHeader:{
    color: '#fff',
    fontSize: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '16',
    marginTop: '16',
    marginBottom: '5'
  },
  weatherTextvalue:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    padding: 4
  },
  minmaxTemp:{
    marginTop: '40'
  },
  aqi:{
    borderRadius: 16,
    backgroundColor: '#2d2d30',
    width: '90%',
    height: '15%',
    padding: 2,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  aqiHeader:{
    color: '#fff',
    fontSize: 24,
    alignSelf: 'left',
    padding: 2,
    marginLeft: 12,
    alignItems: 'center'

  },
  aqiValue:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'left',
    padding: 2,
    marginLeft: 12,
    alignItems: 'center'   
  },
  SunRiseSet:{
    borderRadius: 16,
    backgroundColor: '#2d2d30',
    width: '43%',
    height: 160,
    padding: 1,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 30,
    marginTop: 30,   
    color: '#fff',
    marginLeft: '20'
  },
  sunRise:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'left',
    padding: 0.5,
    marginLeft: 12,
  },
  sunRiseHeader:{
    color: '#fff',
    fontSize: 24,
    alignSelf: 'left',
    padding: 2,
    marginLeft: 12,
    alignItems: 'center'
  },
  sunRiseValue:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'left',
    padding: 2,
    marginLeft: 12,
    alignItems: 'center'  
  },
  sunSet:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'left',
    padding: 0.5,
    marginLeft: 12,
  },
  UVindex:{
    borderRadius: 16,
    backgroundColor: '#2d2d30',
    width: '43%',
    height: 160,
    padding: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 30,
    marginTop: 30,   
    color: '#fff',
    marginRight: '20',
  },
  UVindexHeader:{
    color: '#fff',
    fontSize: 24,
    alignSelf: 'left',
    padding: 2,
    marginLeft: 12,
    alignItems: 'center'
  },
  UVindexValue:{
    color: '#fff',
    fontSize: 18,
    alignSelf: 'left',
    padding: 2,
    marginLeft: 12,
    alignItems: 'center'     
  }
});

/*

*/ 