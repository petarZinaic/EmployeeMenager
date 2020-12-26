import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import HomeScreen from './screens/HomeScreen';

import LoginScreen from "./screens/LoginScreen";




const App = () => {

const [isLoaded, setIsLoaded] = useState(false);


const renderContent = () => {
  switch(isLoaded) {
    case true:
      return <HomeScreen />
    case false:
      return <LoginScreen />  
  }
}

  return (
    <>
  {renderContent()}
    </>
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
