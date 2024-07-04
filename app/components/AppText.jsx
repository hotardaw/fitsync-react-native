import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>
}

export default AppText

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontSize: 16,
        fontFamily: 'Avenir'
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto'
      }
    })
  }
})
