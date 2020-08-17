import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class DeckPreview extends Component {

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

    navigateToDeck = () => {
        this.props.navigation.navigate('Deck', { deckKey: this.props.deckKey})
    }

    render () {
        return (
            <TouchableOpacity
                onPress={this.navigateToDeck}>
                <View style={styles.deckPreview}>
                    <Text>{this.state.title}</Text>
                    <Text>{this.state.size} cards</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    deckPreview: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
  });
  