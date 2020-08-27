import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { addCardToDeck } from '../utils/helpers'

export default class NewCardView extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleChangeQuestionText = (input) => {
        this.setState({question: input})
    }

    handleChangeAnswerText = (input) => {
        this.setState({answer: input})
    }

    saveCardToDeck = (e) => {
        const card = {
            question: this.state.question,
            answer: this.state.answer,
        }
        const { deckKey } = this.props.route.params;
        if(this.state.question !== '' && this.state.answer !== '') {
            addCardToDeck( deckKey, card).then(() => {
                this.props.navigation.navigate('Deck', { deckKey: deckKey })
            })
        }
        else {
            alert("Oops! You must enter a question and answer to save a card.")
        }
    }

    render() {
        const { deckKey } = this.props.route.params;
        return(
        <View style={styles.container}>
            <Text style={styles.title}>{deckKey}</Text>
            <TextInput 
                    style={styles.input}
                    placeholder="Enter Question"
                    onChangeText={this.handleChangeQuestionText}
                />
            <TextInput 
                    style={styles.input}
                    placeholder="Enter Answer"
                    onChangeText={this.handleChangeAnswerText}
                />
            <TouchableOpacity 
                style={styles.button}
                onPress={this.saveCardToDeck}>
                <Text style={{ color: "white"}}>Save my card!</Text>
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
    input: {
        alignSelf: "stretch",
        margin: 32,
        height: 40,
        paddingHorizontal: 16,
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
})