import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import ExerciseDiary from '../components/ExerciseDiary'

function Exercise() {
  return (
    <SafeAreaView style={styles.container}>
      <ExerciseDiary />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})

export default Exercise
