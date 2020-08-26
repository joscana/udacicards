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

    handleCorrectAnswer = (e) => {
        const questionsCorrect = this.state.questionsCorrect + 1
        const currentCardIndex = this.state.currentCardIndex + 1
        this.setState({ questionsCorrect: questionsCorrect })
        console.log(this.state.questionsCorrect, questionsCorrect)
        this.setState({ currentCardIndex: currentCardIndex })
        console.log(this.state.currentCardIndex, currentCardIndex)
    }

    handleIncorrectAnswer = (e) => {
        const currentCardIndex = this.state.currentCardIndex + 1
        this.setState({ currentCardIndex: currentCardIndex })
        console.log(this.state.currentCardIndex, currentCardIndex)
    }

    render() {

        if (!this.state.deck || this.state.deck.questions.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}> Sorry, you can't take a Quiz because there are no questions in this deck</Text>
                </View>
            )
        }

        if(this.state.currentCardIndex >= this.state.deck.questions.length) {
            const score = this.state.questionsCorrect / this.state.deck.questions.length * 100 + '%'
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>Quiz Complete</Text>
                    <Text style={styles.title}>Your Score: {score}</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}>
                        <Text style={{ color: "white" }}>Start Quiz Over</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}>
                        <Text style={{ color: "white" }}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        

        const card = this.state.deck.questions[this.state.currentCardIndex]
        const currentCard = this.state.currentCardIndex + 1
        return (
            <View style={styles.container}>
                <Text style={styles.count}>{currentCard} / {this.state.deck.questions.length}</Text>
                <Text style={styles.title}>Welcome to Quiz!</Text>
                <Card 
                    question={card.question} 
                    answer={card.answer}/>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.correctButton}
                    onPress={this.handleCorrectAnswer}>
                    <Text style={{ color: "white"}}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.incorrectButton}
                    onPress={this.handleIncorrectAnswer}>
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
    }, 
    count: {
        alignSelf: "flex-start"
    },
})