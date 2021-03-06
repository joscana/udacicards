import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import DeckPreview from './DeckPreview'
import { getDecks } from '../utils/helpers'


export default class HomeView extends Component {

    state = {
        deckKeys: [],
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                deckKeys: []
            })
            this.loadDecks()
        });

        this.loadDecks()
    }

    componentWillUnmount() {
        this._unsubscribe()
    }

    loadDecks = () => {
        getDecks().then((keys) => {
            this.setState({
                deckKeys: keys,
            })
        })
    }

    navigateToAddDeck = () => {
        this.props.navigation.navigate('New Deck')
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.title}> Your Decks</Text>
                <View style={styles.deckList}>
                    {this.state.deckKeys.map((key) => (
                        <DeckPreview
                            deckKey={key}
                            key={key}
                            navigation={this.props.navigation}
                        />
                    ))}
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.navigateToAddDeck}
                    style={styles.button}>
                    <Text style={{ color: "white" }}>Add a New Deck</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    deckList: {
        padding: 20,
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
    title: {
        fontSize: 18,
        fontWeight: "300"
    },
});
