import AsyncStorage from '@react-native-community/async-storage'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const DECK_KEYS = "deckKeys"

export const getDecks = async () => {
  let keys = []
  try {
    jsonKeys = await AsyncStorage.getItem(DECK_KEYS)
    if (jsonKeys != null) {
      keys = JSON.parse(jsonKeys)
    }
  } catch (e) {
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
  } catch (e) {
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
    getDecks().then(async (decks) => {
      decks.push(title)
      const jsonValue = JSON.stringify(decks)
      await AsyncStorage.setItem(DECK_KEYS, jsonValue)
    }
    )
  } catch (e) {
    console.log(e)
  }
}


export const addCardToDeck = async (title, card) => {
  try {
    getDeck(title).then(async (deck) => {
      deck.questions.push(card)
      const jsonValue = JSON.stringify(deck)
      await AsyncStorage.setItem(title, jsonValue)
    }
    )
  }
  catch (e) {
    console.log(e)
  }
}

export const deleteDeck = async (title) => {
  try {
    await AsyncStorage.removeItem(title)
  }
  catch (e) {
    //remove error
  }
}


const NOTIFICATION_KEY = 'Udacicards:notifications'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}


export function createNotification () {
    return {
        title: 'Study!',
        body: "Don't forget to quiz yourself today!",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}


export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

                }
            })
        }
    })
}