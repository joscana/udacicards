import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'
import Card from './Card'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Quiz!</Text>
                <Card 
                    question={card.question} 
                    answer={card.answer}/>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.correctButton}>
                    <Text style={{ color: "white"}}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.incorrectButton}>
                    <Text style={{ color: "white"}}>Incorrect</Text>
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
        fontWeight: "300",
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
    incorrectButton: {
        backgroundColor: "#FF0000",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 6,
        fontSize: 16,
    },
    correctButton: {
        backgroundColor: "#66FF00",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 6,
        fontSize: 16,
    }
})