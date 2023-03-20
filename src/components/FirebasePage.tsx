import React,{useEffect, useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import dotenv from 'dotenv';
dotenv.config();

const FirebasePage = () => {
  const [isConnected, setIsConnected]=useState(false);
  var firebaseConnection;
 
  useEffect(()=>{
    
    
    const firebaseConfig={
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain:process.env.FIREBASE_AUTH_DOMAIN ,
      databaseURL:process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket:process.env.FIREBASE_STORAGE_BUCKET ,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };

    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    const read_data= async ()=>{
      // Try to retrieve some data from Firestore
      const collectionRef = firebase.firestore().collection('test');
      console.log('Retrieved collection reference:', collectionRef.path);
      const querySnapshot = await collectionRef.limit(1).get();
      setIsConnected(true);
      // If we successfully retrieved data, Firestore is accessible
      return querySnapshot.size > 0;
    };
    read_data();
    
  },[]);

  if (isConnected==true){
    firebaseConnection="firebase is connected"
    
  } else {
    firebaseConnection="Firebase is not connected"
  }

  return (
    <div className="w-screen h-screen">
    <div className="flex justify-center items-center w-full h-full">
      <h1 className="text-2xl font-bold text-gray-800">{firebaseConnection}</h1>
    </div>
  </div>
  )
}

export default FirebasePage