import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import * as firebaseAuth from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA5WoNyMf7YcNGuHpX2rROGkyrTfvtq7pw",
    authDomain: "terminalmadlab.firebaseapp.com",
    projectId: "terminalmadlab",
    storageBucket: "terminalmadlab.firebasestorage.app",
    messagingSenderId: "878727371948",
    appId: "1:878727371948:web:6045a202d3d3cf18f11309"
  };

const app = initializeApp(firebaseConfig);

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

export const auth = initializeAuth(app, {
    persistence: reactNativePersistence(ReactNativeAsyncStorage),
  });

export const db = getFirestore(app);


export { app };