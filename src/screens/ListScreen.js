import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';
// import { Picker } from "react-native-community/picker";
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {OpenScreenContext} from '../context/OpenScreenContext';
import ListItem from '../components/ListItem';
import AddScreen from "./AddScreen";



const ListScreen = () => {
  const {isListOpen, setIsListOpen} = useContext(OpenScreenContext);
  const {isAddScreenOpen, setIsAddScreenOpen} = useContext(OpenScreenContext);

  let employees = [
    {
      id: 1,
      name: 'Petar Petrovic',
      age: '25',
      position: 'backend',
      seniority: 'junior',
    },
    {
      id: 2,
      name: 'Milos Milosevic',
      age: 28,
      position: 'frontend',
      seniority: 'medior',
    },
    {
      id: 3,
      name: 'Mirko Mirkovic',
      age: 30,
      position: 'backend',
      seniority: 'senior',
    },  
  ];

  const collection = useState('');

  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setIsListOpen(false)}
          style={styles.homeButton}>
          <Text style={styles.buttonText}>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsListOpen(false)}
          style={styles.addButton}>
          <Text style={styles.buttonText}>+ Add New</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.headingText}>Employee List</Text>
      
      
      <ScrollView contentContainerStyle={styles.listContainer}>
        {employees.map((employee, index) => {
          return (
            <ListItem
              key={index}
              name={employee.name}
              age={employee.age}
              position={employee.position}
              seniority={employee.seniority}
            />
          );
        })}
      </ScrollView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  addContainer: {
    zIndex: 20
  },
  listContainer: {
    // height: 700,
    paddingTop: 0,
    paddingLeft: 36,
    paddingRight: 20,
    
    
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#2e64e5',
    // textAlign: 'center',
    // padding: 20,
    marginLeft: 40,
    paddingBottom: 8,

  },
  buttonContainer: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeButton: {
    width: windowWidth / 2.1,
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  addButton: {
    width: windowWidth / 2.1,
    height: windowHeight / 15,
    backgroundColor: '#05B41C',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Roboto',
  },
});

export default ListScreen;
