import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableHighlight,
  Animated,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AddEntry from './components/AddEntry'
import HomeView from './components/HomeView'
import NewDeckView from './components/NewDeckView'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
//import reducer from './reducers'
//import { setLocalNotification } from './utils/helpers'

const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="New Deck" component={NewDeckView}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default class App extends Component {
  handlePress = () => {
    alert('Hello!')
  }
  componentDidMount() {
    //setLocalNotification()
  }
  render() {
    return (
      //<Provider store={createStore(reducer)}>
            <MyTabs />
      //</Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
