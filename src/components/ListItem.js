import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';


const ListItem = (props) => {
    const {name, age, position, seniority} = props;

    return(
        <View style={styles.listItem}>
          <Text>name: {name}</Text>
          <Text>age: {age}</Text>
          <Text>position: {position}</Text>
          <Text>seniority: {seniority}</Text>
        <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#84a5b9',
        borderRadius: 20,
        width: windowWidth / 1.5,
        height: windowHeight / 6,
        alignItems: 'center',
        paddingTop: 2
      },
      deleteButton: {
          backgroundColor: '#cc0000',
          width: 100,
          height: 30,
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center'         
      },
      deleteButtonText: {
          color: 'white'
      }
})

export default ListItem;