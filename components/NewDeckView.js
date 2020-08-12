import React, { Component, useState } from 'react'
import { Text, TextInput, View } from 'react-native'


export default class NewDeckView extends Component {
    render() {
        return(
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter Deck Title"
                />
            </View>
        )
    }
}