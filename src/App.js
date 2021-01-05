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
import {OpenScreenContextProvider} from "./context/OpenScreenContext";




const App = (props) => {

const [isLoaded, setIsLoaded] = useState(null);

useEffect(() => {
  
  // Initialize Firebase
  if(!firebase.apps.length) {

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        setIsLoaded(true)
      } else {
        setIsLoaded(false)
      }
    })

    firebase.database().ref()


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
    <OpenScreenContextProvider>
  {renderContent()}
    </OpenScreenContextProvider>
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
