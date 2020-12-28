import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import firebase from 'firebase';
import ListScreen from './ListScreen';
import {OpenScreenContext} from '../context/OpenScreenContext';

const HomeScreen = (props) => {
  const {isListOpen, setIsListOpen} = useContext(OpenScreenContext);
  

  const renderContent = () => {
    switch (isListOpen) {
      case true:
        return <ListScreen />;
      case false:
        return (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Image
                source={require('../assets/icons/flame-logo.png')}
                style={styles.logo}
              />
              <Text style={styles.text}>
                Welcome to {'\n'} Employee Manager
              </Text>
            </View>

            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsListOpen(true)}>
                <Text style={styles.buttonText}>Employee List</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => firebase.auth().signOut()}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
  };

  return <>{renderContent()}</>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
  },
  topContainer: {
    height: windowHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    paddingTop: 20,
    height: windowHeight / 2,
  },
  button: {
    marginTop: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#2e64e5',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 2,
    marginTop: 10,
  },
  logo: {
    height: 250,
    width: 250,
  },
});

export default HomeScreen;
