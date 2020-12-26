import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {

    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>

            <TouchableOpacity style={styles.logoutButton}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        paddingTop:15,
        paddingBottom: 15,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'red',
        marginTop: 20
    }
})

export default HomeScreen;