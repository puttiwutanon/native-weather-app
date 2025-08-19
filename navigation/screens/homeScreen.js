import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { styles } from '../../styles';
import AddTask from '../addTask';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { deleteTask } from '../../firebaseCRUD';

export default function HomeScreen() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const taskList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(taskList);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (querySnapshot) => {
      const taskList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(taskList);
    });

    return () => unsubscribe();
  }, []);

  const names = {
    one: "วันชัย"
  };

  return (
    <SafeAreaView
      style={[
        { flex: 1},
      ]}
    >
      <View style={styles.welcomeTextcontainer}>
        <Text style={styles.welcomeTexthello}>สวัสดี {names.one}</Text>
        <Text style={styles.welcomeTexttask}>คุณมีงาน {tasks.length} อย่างที่ต้องทำ</Text>
      </View>
      
       <ScrollView style={{ paddingHorizontal: 20}}>
        {tasks.map(task => {
          console.log(task);
          return(
            <View key={task.id} style={styles.taskBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>{task.name}</Text>
                <Text style={{ fontFamily: 'Kanit', fontSize: 14.5, color: 'gray' }}>{task.detail}</Text>
                <Text style={{ fontFamily: 'Kanit', fontSize: 16 }}>
                  ส่งภายในวันที่ {task.date?.day}/{task.date?.month}/{task.date?.year}
                </Text>
              </View>
              <View style={styles.delete_task}>
                <TouchableOpacity onPress={() => deleteTask(task.id)}>
                  <FontAwesome5 name="trash" size={24} color="#fff" />
                </TouchableOpacity>
              </View>              
            </View>
          )
        }

        )}

      </ScrollView>

      {showAddTask && <View style={styles.dimOverlay} />}

      {showAddTask && <AddTask onCancel={() => setShowAddTask(false)} />}

      {!showAddTask && (
        <View style={styles.add_task}>
          <TouchableOpacity style={styles.add_button} onPress={() => setShowAddTask(true)}>
            <FontAwesome6 name="plus" size={30} color="white" solid />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
