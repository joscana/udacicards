import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'
import Card from './Card'

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

    render() {

        if (!this.state.deck || this.state.deck.questions.length === 0) {
            return (
                <View>
                    <Text>No Questions in Deck</Text>
                </View>
            )
        }

        const card = this.state.deck.questions[this.state.currentCardIndex]

        return (
            <View>
                <Text>Welcome to Quiz!</Text>
                <Card 
                    question={card.question} 
                    answer={card.answer}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "300"
    }
})