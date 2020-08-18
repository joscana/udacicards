import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { getDeck } from '../utils/helpers';


export default class Deck extends Component {

    state = {
        deck: null,
    }

    componentDidMount() {
        const { deckKey } = this.props.route.params
        getDeck(deckKey).then((deck) => {
            this.setState({ deck: deck })
        })
    }

    render() {
        const { deckKey } = this.props.route.params
        
        if (!this.state.deck) {
            return (
                <View>
                    <Text>No Deck</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.deck.title}</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate('New Card', { deckKey: deckKey })}
                    style={styles.TouchableOpacityStyle}>
                    <Image
                        source={{
                            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                        }}
                        style={styles.FloatingButtonStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate('Quiz', { deckKey: deckKey })}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Start Quiz</Text>
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