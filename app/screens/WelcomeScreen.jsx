import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native'

import colors from '../config/colors'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/icon.png')}
      blurRadius={5}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-placeholder-image.png')}
        />
        <Text style={styles.tagline}>
          All Your Fitness Goals, In One Place.
        </Text>
      </View>
      <View width={'100%'}>
        <SafeAreaView style={styles.safeArea}>
          <AppButton
            title="Sign in with Google"
            onPress={() => console.log('google pressed')}
            color="google_grey"
          />
          <AppButton
            title="Sign in with Discord"
            onPress={() => console.log('discord pressed')}
            color="discord"
          />
          <AppButton
            title="Sign In"
            onPress={() => console.log('signup pressed')}
            color="primary"
          />
          <AppText>Don't have an account? Sign up</AppText>
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // so it takes entire screen
    justifyContent: 'flex-end', // primary axis is vertical because flex direction is set to column by default. justifyContent can align items along primary axis.
    alignItems: 'center' // this aligns items on the secondary axis (horizontal)
  },
  logo: {
    width: 200,
    height: 200
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center'
  },
  safeArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  tagline: {
    fontSize: 16,
    fontWeight: '500'
  }
})

export default WelcomeScreen
