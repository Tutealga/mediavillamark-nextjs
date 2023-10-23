import { initializeApp } from "firebase/app";
import { getFirestore } from  'firebase/firestore';
import { getDatabase } from 'firebase/database';
import 'dotenv/config';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore();
export const rdb = getDatabase();