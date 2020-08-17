import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Deck extends Component {

    render() {
        const { deckKey } = this.props.route.params;
        return(
        <View>
            <Text>{deckKey}</Text>
        </View>
        )
    }
}