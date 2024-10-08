import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { useCounterStore } from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const  BottomTabNavigator = () => {
 
  const num = useCounterStore(state => state.count);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen 
        options={{ headerTitle: `${num}` }}
        name="Settings" 
        component={SettingsScreen} />
    </Tab.Navigator>
  );
}