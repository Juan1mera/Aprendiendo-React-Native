import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { useMovies } from './presentation/hooks/useMovies';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigation } from './presentation/navigation/Navigation';


export const App = () => {

  const {} = useMovies();


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
        <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  )
}

