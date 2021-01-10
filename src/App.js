import React, { Component }  from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
    if(!firebase.app.length) {
      firebase.initializeApp(config);

    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;