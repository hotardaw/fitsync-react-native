import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Icons from https://icons.expo.fyi/Index
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { Home, Food, Exercise, Profile } from '../screens/index'
import colors from '../config/colors'

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 85,
    background: '#fff'
  }
}

const TabBarIcon = ({ focused, Icon, name, label }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Icon
      name={name}
      size={focused ? 33 : 30}
      color={
        focused ? colors.navbar_icon_focused : colors.navbar_icon_unfocused
      }
    />
    <Text
      style={{
        fontSize: 10,
        color: focused
          ? colors.navbar_icon_focused
          : colors.navbar_icon_unfocused
      }}>
      {label}
    </Text>
  </View>
)

const tabs = [
  { name: 'Home', component: Home, icon: Entypo, iconName: 'home' },
  {
    name: 'Food',
    component: Food,
    icon: MaterialCommunityIcons,
    iconName: 'food-apple'
  },
  {
    name: 'Exercise',
    component: Exercise,
    icon: MaterialCommunityIcons,
    iconName: 'weight-lifter'
  },
  {
    name: 'Profile',
    component: Profile,
    icon: MaterialIcons,
    iconName: 'person'
  }
]

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map(({ name, component, icon, iconName }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  Icon={icon}
                  name={iconName}
                  label={name.toUpperCase()}
                />
              )
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator
