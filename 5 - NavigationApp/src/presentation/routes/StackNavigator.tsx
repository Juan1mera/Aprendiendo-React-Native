import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '..//screens/home/HomeScreen.tsx';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export type RootStackParams = {
  Home: undefined;
  Product: {id: number, name: string};
  Products: undefined;
  Settings: undefined;
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent'
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}