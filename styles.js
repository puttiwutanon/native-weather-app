import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";



export const styles = StyleSheet.create({
  add_task: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  add_button: {
    backgroundColor: '#111460',
    padding: 24,
    borderRadius: 100,
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar:{
    height: 95,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Kanit',
    paddingTop: 15,
    fontSize: 20,
    borderRadius: 40
  },
   tabBarItemStyle: {
     borderRadius: 40,
     overflow: 'hidden',
   },
   welcomeTextcontainer:{
      display: 'flex',
      flexDirection: 'column',
      marginTop: 50,
      marginLeft: 16,
      fontFamily: 'kanit',
      fontSize: 24
   },
   welcomeTexthello:{
      fontFamily: 'Kanit',
      fontSize: 24,
      color: '#808080'
   },
  welcomeTexttask:{
      fontFamily: 'Kanit',
      fontSize: 32
   },
addTaskcontainer: {
  width: 300,
  height: 390,
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 16,
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
},
centeredWrapper: {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: [
    { translateX: -150 },  // half of addTaskcontainer width (300)
    { translateY: -195 }   // half of addTaskcontainer height (390)
  ],
  zIndex: 10,
},
taskContainer01: {
  flexDirection: 'column',
  alignItems: 'flex-start', 
},
taskContainer02: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start', 
},
  inputContainer01:{
    fontFamily: 'Kanit',
    padding: 5,
    borderColor: '#808080',
    borderWidth: 2,
    width: 200,
    borderRadius: 8,
    margin: 8,
    height: 40
  },
  inputContainer02:{
    fontFamily: 'Kanit',
    padding: 5,
    borderColor: '#808080',
    borderWidth: 2,
    width: 60,
    borderRadius: 8,
    margin: 8,
    height: 40
  },
  buttonContainer:{
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonItem:{
    margin: 5,
    borderRadius: 100,
    backgroundColor: '#111460'
  },
  AddCancelbutton:{
    borderRadius: 100,
    backgroundColor: '#111460',
    fontSize: 34,
    alignItems:'center',
    justifyContent: 'center',
    margin: 5,
    width: 120,
    height: 50
  },
  buttonText:{
    fontSize: 24,
    fontFamily: 'Kanit',
    color: '#fff',
    alignItems:'center',
    justifyContent: 'center'
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
  taskBox:{
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 90,
    padding: 15,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  dimOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)', 
    zIndex: 5,
  },
  delete_task:{
    position: 'absolute',
    bottom: 22.5,
    right: 25,
    backgroundColor: '#cc1100',
    padding: 10,
    borderRadius: 10
  }
});
