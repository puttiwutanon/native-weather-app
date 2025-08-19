import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navigation/navbar';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}