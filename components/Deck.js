import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'

export default class Deck extends Component {

    state = {
        title: '',
        size: 0,
    }

    componentDidMount() {
        getDeck(this.props.deckKey).then((deck) => {
            this.setState({
                title: deck.title,
                size: deck.questions.length,
            });
        })
    }

    render () {
        return (
            <View style={styles.deck}>
                <Text>{this.state.title}</Text>
                <Text>{this.state.size} cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
  });
  