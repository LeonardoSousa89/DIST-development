import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBwhfPuTfnup2MibGH9HSREFOam_leh7M",
  authDomain: "dist-4c895.firebaseapp.com",
  databaseURL: "https://dist-4c895-default-rtdb.firebaseio.com",
  projectId: "dist-4c895",
  storageBucket: "dist-4c895.appspot.com",
  messagingSenderId: "365784033172",
  appId: "1:365784033172:web:57128d8f8024df84eed181",
  measurementId: "G-C385J8J3YR"
};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app)
const auth=getAuth(app)

export { db, auth }

