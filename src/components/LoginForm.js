import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import firebase from "firebase";


const LoginForm = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

onButtonPress = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(onLoginSuccess)
    .catch(e => {e})
}

const onLoginSuccess = () => {
    setError(''),
    setLoading(false)
}

return(
    <View style={styles.container}>
        <TextInput
         underlineColorAndroid="transparent"
           underlineColorAndroid={'rgba(0,0,0,0)'}
            style={styles.input}  placeholder="email"
            onChangeText={email => setEmail(email)}
             /> 
        <TextInput
         underlineColorAndroid="transparent"
          style={styles.input}
           placeholder="password"
           onChangeText={password => setPassword(password)}
           />

           <TouchableOpacity
           onPress={onButtonPress}
            style={styles.button}
            >
               <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.errorText}>
                {error}
            </Text>
        </TouchableOpacity>
       
    </View>
)


}

const styles = {
    container: {
        padding: 20,
        alignItems: 'center'
    },
    input: {
        height: 40,
        fontSize: 16,
        width: windowWidth / 1.12,
        height: windowHeight / 15,
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 2,
        color: '#333',
        fontFamily: 'Lato-Regular',
        
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        marginTop: 10
       
    },
    button: {
        marginTop: 10,
        width: '100%',
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
    }
}

export default LoginForm