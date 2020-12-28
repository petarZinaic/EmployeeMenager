import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AddScreen = () => {
    return(
        <View> style={styles.container}
            <Text>Add screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddScreen;