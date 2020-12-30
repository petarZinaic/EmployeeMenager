import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';


const ListItem = (props) => {
    const {name, age, position, seniority} = props;

    return(
        <View style={styles.listItem}>
            <View style={styles.listContainer}>
          <Text style={styles.listText}>Name: {name}</Text>
          <Text style={styles.listText}>Age: {age}</Text>
          <Text style={styles.listText}>Position: {position}</Text>
          <Text style={styles.listText}>Seniority: {seniority}</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
            <Text style={styles.deleteButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#aacfe6',
        borderRadius: 20,
        width: 345,
        height: 140,
        paddingLeft: 20,
        paddingTop: 2,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row'
      },
      listText: {
          fontSize: 16,
          marginLeft: 15,
          fontFamily: 'Roboto',
        
      },
      listContainer: {
        justifyContent: 'center',
      },
      buttonContainer: {
        paddingLeft: 45,
        justifyContent: 'center'
      },
      editButton: {
        width: 80,
          height: 32,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2F80ED',
          
      },
      deleteButton: {
          backgroundColor: '#F24444',
          width: 80,
          height: 32,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10         
      },
      deleteButtonText: {
          color: 'white',
          
      }
})

export default ListItem;