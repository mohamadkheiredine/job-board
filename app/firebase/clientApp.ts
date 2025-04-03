
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4l6MqBal1kNFO2I5q5DbecRPzRUTGMAI",
  authDomain: "job-board-33ce3.firebaseapp.com",
  projectId: "job-board-33ce3",
  storageBucket: "job-board-33ce3.firebasestorage.app",
  messagingSenderId: "266932000119",
  appId: "1:266932000119:web:9c5c11b5134a75e0db3d72",
  measurementId: "G-0DXEMBSSF5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore }