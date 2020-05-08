import React from 'react';
import {StatusBar, StyleSheet, Text, Image, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Image
                style={{flex: 1}}
                source={{uri: 'https://placekitten.com/1000/800'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
