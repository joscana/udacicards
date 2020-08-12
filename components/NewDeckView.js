import React, { Component, useState } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'



export default class NewDeckView extends Component {
    state = {
        text: ''
    }
    handleChangeText = (e) => {
        console.log('text has changed!')
    }

    render() {
        return(
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter Deck Title"
                    onChangeText={this.handleChangeText}
                />
            </View>
        )
    }
}