/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

import LoginScreen from "./screens/LoginScreen";




const App = () => {
  return (
    <>
  <LoginScreen />
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
