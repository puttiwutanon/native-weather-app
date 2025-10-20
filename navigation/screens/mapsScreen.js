import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { styles } from '../../styles';
import { db } from '../../firebaseConfig'; // make sure this points to your Firebase config
import { collection, getDocs } from 'firebase/firestore';




export default function mapsScreen() {
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}