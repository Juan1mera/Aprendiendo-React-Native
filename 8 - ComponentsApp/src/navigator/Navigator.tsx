import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../presentation/screens/home/HomeScreen';
import React, { useContext } from 'react';
import Animation101Screen from '../presentation/screens/animations/Animation101Screen';
import {Animation102Screen} from '../presentation/screens/animations/Animation102Screen';
import SwitchScreen from '../presentation/screens/switches/SwitchScreen';
import AlertScreen from '../presentation/screens/alerts/AlertScreen';
import TextInputScreen from '../presentation/screens/inputs/TextInputScreen';
import PullToRefreshScreen from '../presentation/screens/ui/PullToRefreshScreen';
import CustomSectionListScreen from '../presentation/screens/sections/CustomSectionListScreen';
import ModalScreen from '../presentation/screens/ModalScreen';
import InfiniteScrollScreen from '../presentation/screens/InfiniteScrollScreen';
import SlidesScreen from '../presentation/screens/SlidesScreen';
import ChangeThemeScreen from '../presentation/screens/theme/ChangeThemeScreen';
import { ThemeContext } from '../presentation/context/ThemeContext';

const Stack = createStackNavigator();

export const NavigatorStack = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: colors.background
            }
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />


      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />



      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
}
