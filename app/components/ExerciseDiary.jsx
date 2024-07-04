import React, { useState } from 'react'
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const ExerciseDiary = () => {
  const [entries, setEntries] = useState([])
  const [exercise, setExercise] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')

  const addEntry = () => {
    if (exercise && sets && reps) {
      const newEntries = []
      for (let i = 1; i <= parseInt(sets); i++) {
        newEntries.push({
          exercise,
          setNumber: i,
          reps,
          weight,
          id: `${Date.now().toString()}-${i}`
        })
      }
      setEntries([...entries, ...newEntries])
      setExercise('')
      setSets('')
      setReps('')
    }
  }

  const renderItem = ({ item, index }) => {
    const showExerciseName =
      index === 0 || entries[index - 1].exercise !== item.exercise
    return (
      <View style={styles.row}>
        <Text style={styles.exerciseCell}>
          {showExerciseName ? item.exercise : ''}
        </Text>
        <Text style={styles.numberCell}>{item.setNumber}</Text>
        <Text style={styles.numberCell}>{item.reps}</Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.exerciseInput}
            placeholder="Exercise"
            value={exercise}
            onChangeText={setExercise}
          />
          <TextInput
            style={styles.numberInput}
            placeholder="Sets"
            value={sets}
            onChangeText={setSets}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.numberInput}
            placeholder="Reps"
            value={reps}
            onChangeText={setReps}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addButton} onPress={addEntry}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.exerciseHeaderCell}>Exercise</Text>
            <Text style={styles.numberHeaderCell}>Set</Text>
            <Text style={styles.numberHeaderCell}>Reps</Text>
          </View>
          <FlatList
            style={styles.flatList}
            data={entries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    height: 40
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  cell: {
    flex: 1,
    textAlign: 'center'
  },
  container: {
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  exerciseHeaderCell: {
    flex: 1,
    paddingRight: 10,
    fontWeight: 'bold'
  },
  exerciseCell: {
    flex: 1,
    paddingRight: 190
  },
  exerciseInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '90%'
  },
  numberCell: {
    width: 55,
    textAlign: 'center',
    marginRight: 10
  },
  numberHeaderCell: {
    width: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10
  },
  numberInput: {
    width: 55,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    textAlign: 'center',
    height: 40
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10
  },
  tableContainer: {
    width: '90%',
    flex: 1
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
    width: '90%'
  }
})

export default ExerciseDiary
