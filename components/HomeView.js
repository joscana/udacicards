import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Deck from './Deck'


export default class HomeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Decks</Text>
                <View style={styles.deckList}>
                    <Deck />
                    <Deck />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('New Deck')}
                        style={styles.TouchableOpacityStyle}>
                        <Image
                            source={{
                                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                            }}
                            style={styles.FloatingButtonStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckList: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        padding: 20,
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});
