import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';


export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value } 
    };
};

export const employeeCreate = ({ name, age, position }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employess`)
        .push({ name, age, position })
        .then(() => {
            dispatch({ type:  EMPLOYEE_CREATE})
            Actions.pop()});
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employess`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
           
        });
    }
};

export const employeeSave = ({ name, age, position, uid }) => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, age, position })
        .then(() => {
          dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
          Actions.employeeList({ type: 'reset' });
        });
    };
  };

