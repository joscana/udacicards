import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export default class NewCardView extends Component {

    render() {
        return(
        <View style={styles.container}>
            <Text style={styles.title}>Deck Title</Text>
            <TextInput style={styles.input}
                    style={{height: 40}}
                    placeholder="Enter Question"
                />
            <TextInput style={styles.input}
                    style={{height: 40}}
                    placeholder="Enter Answer"
                />
            <TouchableOpacity 
                style={styles.button} >
                <Text style={{ color: "white"}}>Save my card!</Text>
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