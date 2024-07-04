import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Food() {
  return (
    <View style={styles.container}>
      <Text>Food</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

export default Food
