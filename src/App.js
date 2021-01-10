import React, { Component }  from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBh97DGahbhm9wX8Gb1rbIUlj75B9Xny38",
      authDomain: "manager-75295.firebaseapp.com",
      projectId: "manager-75295",
      storageBucket: "manager-75295.appspot.com",
      messagingSenderId: "678571542819",
      appId: "1:678571542819:web:96b623c699851f7d9a2496",
      measurementId: "G-RZC2BSP041"
    };

  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello !
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;