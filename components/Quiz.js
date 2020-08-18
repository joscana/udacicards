import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'

export default class Quiz extends Component {
    state = {
        deck: null,
        currentCardIndex: 0,
        questionsCorrect: 0,
    }

    render () {
        return (
            <View>
                <Text>Welcome to Quiz!</Text>
            </View>
        )
    }
}