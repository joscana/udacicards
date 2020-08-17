import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeView from './components/HomeView'
import NewDeckView from './components/NewDeckView'
import Deck from './components/Deck'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
//import reducer from './reducers'
//import { setLocalNotification } from './utils/helpers'



const Stack = createStackNavigator();
function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="New Deck" component={NewDeckView}/>
        <Stack.Screen name="Deck" component={Deck} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default function App() {
    return (
        <MyTabs />
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

