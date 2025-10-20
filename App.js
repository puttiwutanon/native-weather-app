import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navbar from './navigation/navbar';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Dark = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#1e1e1e', 
    },
  };

  return (
    <NavigationContainer theme={Dark}>
      <Navbar />
    </NavigationContainer>
  );
}