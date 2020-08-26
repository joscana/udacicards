import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Card extends Component {
    state = {
        showAnswer: false
    }
    render() {
        if(!this.state.showAnswer) {
            return (
                <View style={styles.card}>
                    <Text style={styles.text}>{this.props.question}</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.setState({ showAnswer: true }) }
                        style={styles.button}>
                    <Text style={{ color: "white" }}>Show Answer</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={styles.card}>
                <Text style={styles.text}>{this.props.answer}</Text>
                <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.setState({ showAnswer: false }) }
                        style={styles.button}>
                        <Text style={{ color: "white" }}>Show Question</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 60,
        height: 250,
        width: 350,
    },
    text: {
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
});