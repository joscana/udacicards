import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeView from './components/HomeView'
import NewDeckView from './components/NewDeckView'
import Deck from './components/Deck'
import NewCardView from './components/NewCardView'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'



const Stack = createStackNavigator();
function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="New Deck" component={NewDeckView} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="New Card" component={NewCardView} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default function App() {
  useEffect(() => {
    setLocalNotification()
  }, [])
  return (
    <MyTabs />
  )
}