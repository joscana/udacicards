import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Notifications } from 'expo'
import { Permissions } from 'expo-permissions'
import AsyncStorage from '@react-native-community/async-storage'


export const getDecks = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
      console.log(e)
    }
  
    console.log(keys)
    return keys
  }

export const getDeck = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}
  
export const saveDeckTitle = async (title) => {
    const deck = {
        "title": title,
        "questions": [],
    }
    try {
        const jsonValue = JSON.stringify(deck)
        await AsyncStorage.setItem(title, jsonValue)
      } catch (e) {
        console.log(e)
      }
}


//addCardToDeck()



// const NOTIFICATION_KEY = 'Udacicards: notifications'

// export function clearLocalNotification () {
//     return AsyncStorage.removeItem(NOTIFICATION_KEY)
//     .then(Notifications.cancelAllScheduledNotificationsAsync())
// }


// export function createNotification () {
//     return {
//         title: 'Study!',
//         body: "Don't forget to quiz yourself today!",
//         android: {
//             sound: true,
//             priority: 'high',
//             sticky: false,
//             vibrate: true,
//         }
//     }
// }


// export function setLocalNotification () {
//     AsyncStorage.getItem(NOTIFICATION_KEY)
//     .then(JSON.parse)
//     .then((data) => {
//         if(data === null) {
//             Permissions.askAsync(Permissions.NOTIFICATIONS)
//             .then(({ status }) => {
//                 if(status === 'granted') {
//                     Notifications.cancelAllScheduledNotificationsAsync()

//                     let tomorrow = new Date()
//                     tomorrow.setDate(tomorrow.getDate() + 1)
//                     tomorrow.setHours(20)
//                     tomorrow.setMinutes(0)

//                     Notifications.scheduleLocalNotificationAsync(
//                         createNotification(),
//                         {
//                             time: tomorrow,
//                             repeat: 'day',
//                         }
//                     )
//                     AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

//                 }
//             })
//         }
//     })
// }