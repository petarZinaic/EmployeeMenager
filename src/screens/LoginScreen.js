import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';


import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <Image 
      source={require('../assets/icons/flame-logo.png')}
      style={styles.logo}
      />
      <Text style={styles.text}>Login </Text>
    </View>
    <View>
    <LoginForm />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // paddingTop: 50,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#2e64e5',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 2,
    marginTop: 10
  },
  logo: {
    height: 200,
    width: 200,
  },
});

export default LoginScreen;
