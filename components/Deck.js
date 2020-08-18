import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native'

export default class Deck extends Component {

    render() {
        const { deckKey } = this.props.route.params;
        return(
        <View style={styles.container}>
            <Text style={styles.title}>{deckKey}</Text>
            <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('New Card')}
                        style={styles.TouchableOpacityStyle}>
                        <Image
                            source={{
                                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                            }}
                            style={styles.FloatingButtonStyle}
                        />
                    </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "300"
    },
    button: {
        backgroundColor: "#575DD9",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 6,
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
    },
})