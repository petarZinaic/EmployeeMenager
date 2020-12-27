import React from 'react';
import { View, StyleSheet, ActivityIndicator } from "react-native";
 
const Loading = () => {
    return (
        <View>
            <ActivityIndicator size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
})

export default Loading;