import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/icons/flame-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.text}>Sign in </Text>

      <FormInput
        labelValue={email}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton buttonTitle="Sign In" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#2e64e5',
    textAlign: 'center',
    padding: 20,
  },
  logo: {
    height: 200,
    width: 200,
  },
});

export default LoginScreen;
