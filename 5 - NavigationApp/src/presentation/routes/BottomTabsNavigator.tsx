import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcons } from '../components/IonIcons';
const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={{
            headerShown: true,
            tabBarLabelStyle:{
                marginBottom: 5,
            },
            headerStyle:{
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent'
            },
            tabBarStyle:{
                borderTopWidth: 0,
                elevation: 0
            }
        }}
    >
      <Tab.Screen name="Tab1" options={{title: '1', tabBarIcon: ({color}) => (<IonIcons name='chatbubble-outline' color={color} />) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: '2', tabBarIcon: ({color}) => (<IonIcons name='camera-outline' color={color} />) }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{title: '3', tabBarIcon: ({color}) => (<IonIcons name='home-outline' color={color} />) }} component={StackNavigator} />
    </Tab.Navigator>
  );
}