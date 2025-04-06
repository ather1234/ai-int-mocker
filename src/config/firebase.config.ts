import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBH8L7d29oN99PSbNh2Dl2Tn7zqslTb38",
  authDomain: "ai-mock-interview-bb63e.firebaseapp.com",
  projectId: "ai-mock-interview-bb63e",
  storageBucket: "ai-mock-interview-bb63e.firebasestorage.app",
  messagingSenderId: "877240920333",
  appId: "1:877240920333:web:9830ae5eb59b1224b12844"
};

let app;
try {
  app = getApp();
} catch {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export { db };