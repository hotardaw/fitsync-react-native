import React from 'react'
import { Dimensions, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import WelcomeScreen from './app/screens/WelcomeScreen'
import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import BottomTabNavigator from './app/components/BottomTabNavigator'

import colors from './app/config/colors'

export default function App() {
  console.log(Dimensions.get('screen'))

  // If using Redux to provide store, wrap it outside PaperProvider so the context is available to components rendered inside a Modal from the library.
  // https://callstack.github.io/react-native-paper/docs/guides/getting-started/

  return (
    <PaperProvider>
      {/* <WelcomeScreen /> */}
      <BottomTabNavigator />
    </PaperProvider>
  )
}
