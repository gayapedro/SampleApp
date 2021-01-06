import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const nome = 'Pedro Gaya';

    return (    
        <View>
            <Text style={styles.title}>Getting started with react native!</Text>
            <Text style={styles.phrase}>My name is {nome}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    phrase: {
        fontSize: 20
    }
});

export default ComponentsScreen;