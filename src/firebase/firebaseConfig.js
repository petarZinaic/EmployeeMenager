import firebase from 'firebase';
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCQBl6gmY1YjIw4vvLpd-2edWKq-3UxxXA",
    authDomain: "employeemanager-88cc7.firebaseapp.com",
    databaseURL: "https://employeemanager-88cc7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "employeemanager-88cc7",
    storageBucket: "employeemanager-88cc7.appspot.com",
    messagingSenderId: "328138051772",
    appId: "1:328138051772:web:28d0231daab082454580b9",
    measurementId: "G-0EQV8KNHLW"
}

export const EmployeesRef = db.collection('Employees');
if(!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore(app);
    firebase.initializeApp(firebaseConfig);



 }
