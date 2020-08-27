import React, { Component } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'
import { getDeck } from '../utils/helpers'
import { TouchableOpacity } from 'react-native'
import { Value } from 'react-native-reanimated'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);


export default class DeckPreview extends Component {

    state = {
        title: '',
        size: 0,
        opacity: new Animated.Value(1)
    }

    componentDidMount() {
        getDeck(this.props.deckKey).then((deck) => {
            this.setState({
                title: deck.title,
                size: deck.questions.length,
            })
        })
    }

    navigateToDeck = () => {
        const { opacity } = this.state
        Animated.timing(opacity, { 
            toValue: 0, 
            duration: 1000,
            useNativeDriver: true, 
        })
        .start(() => {
            this.props.navigation.navigate('Deck', { 
                deckKey: this.props.deckKey,
            })
        })
    }


    render () {
        const { opacity } = this.state

        return (
                <Animated.View
                    style={[styles.deckPreview, { opacity }]}>
                    <AnimatedTouchable onPress={this.navigateToDeck}>
                        <Text>{this.state.title}</Text>
                        <Text>{this.state.size} cards</Text>
                    </AnimatedTouchable>
                </Animated.View>
        
            
        )
    }
}

const styles = StyleSheet.create({
    deckPreview: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 20,
        height: 150,
        width: 250,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
  });
  