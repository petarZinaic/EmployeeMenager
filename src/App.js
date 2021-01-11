import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBxPCIUPc_QNQKvc2w-9H1FPxntcB03dvM",
      authDomain: "employee-9e1ee.firebaseapp.com",
      databaseURL: "https://employee-9e1ee-default-rtdb.firebaseio.com",
      projectId: "employee-9e1ee",
      storageBucket: "employee-9e1ee.appspot.com",
      messagingSenderId: "263951492978",
      appId: "1:263951492978:web:5227d1645344eb7baedfeb",
      measurementId: "G-7WXRJ29ZQN"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app();
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router />
      </Provider>
    );
  }
}

export default App;
