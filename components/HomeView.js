import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Deck from './Deck'


export default class HomeView extends Component {
    render() {
      return (
          <View style={styles.container}>
              <Text>Decks</Text>
              <View style={styles.deckList}>
                  <Deck />
                  <Deck />
                  <View style={styles.addNewDeck}>
                      <AntDesign name="pluscircle" size={30} color="blue" />
                      <TouchableOpacity>
                          <Text>Add New Deck</Text>
                      </TouchableOpacity>
                  </View>
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
  });
  