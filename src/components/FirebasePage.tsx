import React,{useEffect, useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";


const FirebasePage = () => {
  const [isConnected, setIsConnected]=useState(false);
  var firebaseConnection;
  const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };
 
  useEffect(()=>{
    
    
    const firebaseConfig={
      apiKey:"AIzaSyCq5OsIGwWNQAWhljXSGrnt-JBF63QKFjA",
      authDomain:"test-1edb0.firebaseapp.com" ,
      databaseURL:"https://test-1edb0-default-rtdb.firebaseio.com/",
      projectId: "test-1edb0",
      storageBucket:"test-1edb0.appspot.com" ,
      messagingSenderId:"239136829511",
      appId: "1:239136829511:web:a79655588889b4a0df8162",
      measurementId: "G-VZKL7Z9NSJ"
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
    if (!window.firebaseui_instance) {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      window.firebaseui_instance = ui;
    }

    window.firebaseui_instance.start("#firebaseui-auth-container", uiConfig);
  }, []);


  if (isConnected==true){
    firebaseConnection="firebase is connected"
    
  } else {
    firebaseConnection="Firebase is not connected"
  }

  return (
    <div className="w-screen h-screen">
    <div className="flex justify-center items-center w-full h-full">
      <h1 className="text-2xl font-bold text-gray-800">{firebaseConnection}</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  </div>
  )
}

export default FirebasePage