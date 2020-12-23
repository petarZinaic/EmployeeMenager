/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
    <View style={styles.View}>
      <Text style={styles.text}>
        Hello World
      </Text>
    </View>
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
