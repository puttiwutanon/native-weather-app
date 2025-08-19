import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuBEgKRswAoVSq3mxHNQtI5M4YW2R9Oi0",
  authDomain: "react-native-task-maneger-app.firebaseapp.com",
  projectId: "react-native-task-maneger-app",
  storageBucket: "react-native-task-maneger-app.firebasestorage.app",
  messagingSenderId: "148040382513",
  appId: "1:148040382513:web:c919a10bcefe9d73cd7d10",
  measurementId: "G-TNW1W855HX"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export { db };
