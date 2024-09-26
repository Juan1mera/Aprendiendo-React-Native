import { createStackNavigator } from '@react-navigation/stack';
import PermissionScreen from '../screens/permissions/PermissionScreen';
import MapScreen from '../screens/maps/MapScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';

export type RootStackParam = {
    LoadingScreen: undefined;
    PermissionScreen: undefined;
    MapScreen: undefined;
}


const Stack = createStackNavigator<RootStackParam>();

export const StackNavigator = () => {




  return (
    <Stack.Navigator 
    initialRouteName='LoadingScreen'
    // initialRouteName='PermissionScreen'
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'white' },
    }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}