import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'

export default class Quiz extends Component {
    state = {
        deck: null,
        currentCardIndex: 0,
        questionsCorrect: 0,
    }

    componentDidMount() {
        const { deckKey } = this.props.route.params
        getDeck(deckKey).then((deck) => {
            this.setState({ deck: deck })
        })
    }

    render () {
        
        if (!this.state.deck) {
            return (
                <View>
                    <Text>No Deck</Text>
                </View>
            )
        }
        return (
            <View>
                <Text>Welcome to Quiz!</Text>
                <Text>{this.state.deck.questions}</Text>
            </View>
        )
    }
}