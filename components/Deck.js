import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Deck extends Component {
    render () {
        return (
            <View style={styles.deck}>
                <Text>Title</Text>
                <Text># of cards</Text>
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
  