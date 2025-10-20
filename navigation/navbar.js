import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import mapsScreen from './screens/mapsScreen';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
          ...styles.navbar,
          borderTopWidth: 0, 
          elevation: 0,      
          shadowOpacity: 0,  
        },
        tabBarActiveTintColor: '#888',       
        tabBarInactiveTintColor: '#fff',  
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="location"
        component={mapsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="location-dot" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="more"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bars" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};


export default Navbar;
