import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/helpers'



export default class NewDeckView extends Component {
    state = {
        input: ''
    }
    handleChangeText = (input) => {
        this.setState({input: input})
    }
    saveTitle = (e) => {
        saveDeckTitle(this.state.input)
    }
    

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={styles.input}
                    style={{height: 40}}
                    placeholder="Enter Deck Title"
                    onChangeText={this.handleChangeText}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.saveTitle}
                >
                        <Text style={{ color: "white"}}>Save my title!</Text>
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
        height: 64,
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