import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { getDeck, deleteDeck } from '../utils/helpers';


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

    handleDeleteDeck = (e) => {
        console.log('delete deck pressed')
        const { deckKey } = this.props.route.params
        deleteDeck(deckKey)
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

        const cardsInDeck = this.state.deck.questions.length

        if(cardsInDeck === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{this.state.deck.title}</Text>
                <Text> 0 cards</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate('New Card', { deckKey: deckKey })}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.handleDeleteDeck}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Delete Deck</Text>
                </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.deck.title}</Text>
                <Text>{cardsInDeck === 1 ? `${cardsInDeck} card` : `${cardsInDeck} cards`} </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate('New Card', { deckKey: deckKey })}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate('Quiz', { deckKey: deckKey })}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.handleDeleteDeck}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Delete Deck</Text>
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
})