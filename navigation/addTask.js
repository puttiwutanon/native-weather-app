import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { styles } from '../styles';
import { addTask } from '../firebaseCRUD';

const AddTask = ({ onCancel }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <View style={styles.centeredWrapper}>
      <View style={styles.addTaskcontainer}>
        <View style={styles.taskContainer01}>
          <View>
            <Text style={{ fontFamily: 'Kanit', fontSize: 24 }}>ชื่อ</Text>
            <TextInput placeholder="ชื่องาน" 
            style={styles.inputContainer01} 
            value={taskName}
            onChangeText={setTaskName} />
          </View>

          <View>
            <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>ข้อมูล</Text>
            <TextInput placeholder="ข้อมูลงาน" 
            style={styles.inputContainer01} 
            value={taskDetail}
            onChangeText={setTaskDetail}/>
          </View>
        </View>

        <View style={styles.taskContainer02}>
          <View>
            <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>วัน</Text>
            <TextInput placeholder="วัน" 
            style={styles.inputContainer02}
            value={day}
            onChangeText={setDay}
            keyboardType="numeric"
             />
          </View>

          <View>
            <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>เดือน</Text>
            <TextInput placeholder="เดือน" 
            style={styles.inputContainer02} 
            value={month}
            onChangeText={setMonth}
            keyboardType="numeric"
            />
          </View>

          <View>
            <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>ปี</Text>
            <TextInput placeholder="ปี" 
            style={styles.inputContainer02} 
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.AddCancelbutton}
            onPress={async () => {
              if (!taskName) {
                alert("กรุณากรอกชื่องาน");
                return;
              }

              // Validate that day, month, and year are numbers
              if (
                isNaN(parseInt(day)) ||
                isNaN(parseInt(month)) ||
                isNaN(parseInt(year))
              ) {
                alert('กรุณากรอกวันที่เป็นตัวเลข');
                return;
              }

              await addTask({
                name: taskName,
                detail: taskDetail,
                date: {
                  day: parseInt(day),
                  month: parseInt(month),
                  year: parseInt(year),
                },
                createdAt: new Date(),
              });

              // Reset form after adding
              setTaskName('');
              setTaskDetail('');
              setDay('');
              setMonth('');
              setYear('');

              onCancel(); // Hide the form
            }}
          >
            <Text style={styles.buttonText}>เพิ่ม</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.AddCancelbutton} onPress={onCancel}>
            <Text style={styles.buttonText}>ยกเลิก</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTask;
