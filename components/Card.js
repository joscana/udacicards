import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Card extends Component {
    state = {
        showAnswer: false
    }
    render() {
        if(!this.state.showAnswer) {
            return (
                <View style={styles.card}>
                <Text style={styles.text}>{this.props.question}</Text>
            </View>
            )
        }
        return (
            <View style={styles.card}>
                <Text stlye={styles.text}>{this.props.answer}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 60,
    },
    text: {
        fontSize: 24,
        fontWeight: "300"
    },
});