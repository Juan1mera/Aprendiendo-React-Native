import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator'
import {ProfileScreen} from '../screens/profile/ProfileScreen'
import { colors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IonIcons } from '../components/IonIcons';


const Drawer = createDrawerNavigator();


export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions()

  return (
    <Drawer.Navigator 

      drawerContent={(props) => <CustomDrawerContent {...props} />}

      screenOptions={{
        drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',

        headerShown: false,
        drawerActiveBackgroundColor: colors.dark,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: colors.dark,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
    >
      {
        /*
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        
        */
      }
      <Drawer.Screen options={{drawerIcon: ({color}) => (<IonIcons name='archive-outline' color={color} />)}} name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen options={{drawerIcon: ({color}) => (<IonIcons name='person-outline' color={color} />)}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {



  return(

    <DrawerContentScrollView>
      <View style={{height: 200, backgroundColor: colors.dark, margin: 30, borderRadius: 50}}> 

      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>

  )
}