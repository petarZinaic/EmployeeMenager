import React, { useState, useEffect } from 'react';
import firebase  from "firebase";
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import HomeScreen from './screens/HomeScreen';

import LoginScreen from "./screens/LoginScreen";
import Loading from "./components/Loading";
import {OpenListContextProvider} from "./context/OpenListContext";




const App = (props) => {

const [isLoaded, setIsLoaded] = useState(null);

useEffect(() => {
  let firebaseConfig = {
    apiKey: "AIzaSyCQBl6gmY1YjIw4vvLpd-2edWKq-3UxxXA",
    authDomain: "employeemanager-88cc7.firebaseapp.com",
    projectId: "employeemanager-88cc7",
    storageBucket: "employeemanager-88cc7.appspot.com",
    messagingSenderId: "328138051772",
    appId: "1:328138051772:web:28d0231daab082454580b9",
    measurementId: "G-0EQV8KNHLW"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        setIsLoaded(true)
      } else {
        setIsLoaded(false)
      }
    })


  }
}, [])


const renderContent = () => {
  switch(isLoaded) {
    case true:
      return <HomeScreen />
    case false:
      return <LoginScreen />  

      default: 
      return <Loading />
  }
}

  return (
    <OpenListContextProvider>
  {renderContent()}
    </OpenListContextProvider>
  );
};

const styles = StyleSheet.create({
 View: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center' 
 }, 
 text: {
   color: 'red',
   fontSize: 30
 }
});

export default App;
