import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburguerMenu } from '../components/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburguerMenu />

    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
    </>
  );
}