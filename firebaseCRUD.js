import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const addTask = async (task) => {
  try {
    await addDoc(collection(db, 'tasks'), task);
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, 'tasks'));
  let tasks = [];
  querySnapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  return tasks;
};

export const updateTask = async (id, updatedData) => {
  const taskRef = doc(db, 'tasks', id);
  await updateDoc(taskRef, updatedData);
};

export const deleteTask = async (id) => {
  await deleteDoc(doc(db, 'tasks', id));
};
