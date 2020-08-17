import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import Deck from './Deck'
import { getDecks } from '../utils/helpers'


export default class HomeView extends Component {

    state = {
        deckKeys: []
    }

    componentDidMount() {
        getDecks().then((keys) => {
            this.setState({
                deckKeys: keys,
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Decks</Text>
                <View style={styles.deckList}>
                    {this.state.deckKeys.map((key) => (
                        <Deck deckKey={key} key={key}/>
                    ))}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('New Deck')}
                        style={styles.TouchableOpacityStyle}>
                        <Image
                            source={{
                                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                            }}
                            style={styles.FloatingButtonStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckList: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        padding: 20,
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});
