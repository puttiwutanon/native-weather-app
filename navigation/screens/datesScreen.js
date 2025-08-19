import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { styles } from '../../styles';
import { db } from '../../firebaseConfig'; // make sure this points to your Firebase config
import { collection, getDocs } from 'firebase/firestore';

  LocaleConfig.locales['th'] = {
  monthNames: [
    'มกราคม',
    'กุมภาพันธุ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
  ],
  monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'ม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  dayNames: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุทธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
  today: "วันนี้"
};
LocaleConfig.defaultLocale = 'th';


export default function DatesScreen() {
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    const fetchTodayTasks = async () => {
      const now = new Date();
      const todayDay = now.getDate();
      const todayMonth = now.getMonth() + 1;
      const todayYear = now.getFullYear();

      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const filtered = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const taskDate = data.date;

          if (
            parseInt(taskDate?.day) === todayDay &&
            parseInt(taskDate?.month) === todayMonth &&
            parseInt(taskDate?.year) === todayYear
          ) {
            filtered.push({ id: doc.id, ...data });
          }
        });

        setTodayTasks(filtered);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };

    fetchTodayTasks();
  }, []);



  return (
    <SafeAreaView>
      <Calendar
        style={styles.calendar}
        theme={{
        backgroundColor: '#fff',
        calendarBackground: '#fff',
        textSectionTitleColor: '#111460',
        selectedDayBackgroundColor: '#111460',
        selectedDayTextColor: '#fff',
        todayTextColor: '#e91e63',
        dayTextColor: '#111460',
        textDisabledColor: '#d9e1e8',
        monthTextColor: '#111460',
        textDayFontFamily: 'Kanit',
        textMonthFontFamily: 'Kanit',
        textDayHeaderFontFamily: 'Kanit',
        textDayHeaderFontSize: 18,
        textDayFontSize: 16,
        textMonthFontSize: 24,
      }}

      />

      <View style={{display: 'flex'}}>
        <Text style={styles.todayWorkText}>งานที่ต้องส่งวันนี้</Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 20}}>
        {todayTasks.length === 0 ? (
          <Text style={{ fontFamily: 'Kanit', fontSize: 16, textAlign: 'center', marginTop: 20 }}>
            วันนี้ไม่มีงานที่ต้องทำ
          </Text>
        ) : (
          todayTasks.map((task) => (
            <View key={task.id} style={styles.taskBox}>
              <Text style={{ fontFamily: 'Kanit', fontSize: 18 }}>{task.name}</Text>
              <Text style={{ fontFamily: 'Kanit', fontSize: 14, color: '#555' }}>{task.detail}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  )
}