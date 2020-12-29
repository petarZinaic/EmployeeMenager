import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {OpenScreenContext} from '../context/OpenScreenContext';
import ListItem from '../components/ListItem';

const ListScreen = () => {
  const {isListOpen, setIsListOpen} = useContext(OpenScreenContext);
  const {isAddScreenOpen, setIsAddScreenOpen} = useContext(OpenScreenContext)

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

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.headingText}>Employee List</Text>
        <ListItem
          name={employees[0].name}
          age={employees[0].age}
          position={employees[0].position}
          seniority={employees[0].seniority}
        />
         <ListItem
              name={employees[1].name}
              age={employees[1].age}
              position={employees[1].position}
              seniority={employees[1].seniority}
            />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setIsListOpen(false)}
          style={styles.homeButton}>
          <Text style={styles.buttonText}>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsListOpen(false)}
          style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    height: 700,
    paddingTop: 0,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#2e64e5',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  buttonContainer: {
    height: 71,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
  },
  homeButton: {
    width: windowWidth / 2.1,
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  addButton: {
    width: windowWidth / 2.1,
    height: windowHeight / 15,
    backgroundColor: '#05B41C',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});

export default ListScreen;
