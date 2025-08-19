import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import DatesScreen from './screens/datesScreen';
import ProfileScreen from './screens/profileScreen';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="หน้าแรก"
      screenOptions={{
        tabBarStyle: styles.navbar,
        tabBarActiveBackgroundColor: '#111460',
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#0007',
        tabBarItemStyle: styles.tabBarItemStyle
      }}
    >
      <Tab.Screen
        name="หน้าแรก"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ปฏิทิน"
        component={DatesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ผู้ใช้"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};


export default Navbar;
