
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKS7WXhVEMz3D5nX18VIy2c4Pu13c-rZM",
    authDomain: "linkedin-clone-2058a.firebaseapp.com",
    projectId: "linkedin-clone-2058a",
    storageBucket: "linkedin-clone-2058a.appspot.com",
    messagingSenderId: "269639214199",
    appId: "1:269639214199:web:a377d091659666032e1272"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);


  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  export {db,auth};