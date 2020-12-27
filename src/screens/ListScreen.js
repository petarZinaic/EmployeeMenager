import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { OpenListContext } from "../context/OpenListContext";

const ListScreen = () => {
    const {isListOpen, setIsListOpen} = useContext(OpenListContext);


    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
            <TouchableOpacity
            onPress={() => setIsListOpen(false)}
             style={styles.homeButton}>
                <Text style={styles.buttonText}>Home Page</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeButton: {
        marginTop: 10,
        width: windowWidth / 1.2,
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    }
})

export default ListScreen;