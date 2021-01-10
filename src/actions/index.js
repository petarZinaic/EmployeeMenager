import firebase from 'firebase';
import {EMAIL_CHANGED} from './types';
import {PASSWORD_CHANGED} from './types';
import {LOGIN_USER_SUCCESS} from './types';
import { LOGIN_USER_FAIL } from './types';
import { LOGIN_USER } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    // if(!firebase.app.length) {
      
    // }

    dispatch({ type: LOGIN_USER })
  
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))   
      .catch((error) => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => loginUserSucess(dispatch, user))
       .catch(() => loginUserFail(dispatch))  
      })  
  
  };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSucess = (disptach, user) => {
  disptach({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};
