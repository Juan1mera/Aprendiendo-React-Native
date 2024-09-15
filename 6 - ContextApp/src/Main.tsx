import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { BottomTabNavigator } from './presentation/navigator/BottomTabNavigator'

export const Main = () => {
  return (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
  )
}
