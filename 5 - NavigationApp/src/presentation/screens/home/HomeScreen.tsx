import React, { useEffect } from 'react'
import { Text, View, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation, NavigationProp, DrawerActions } from '@react-navigation/native';
import { CustomButton } from '../../components/CustomButton'
import { RootStackParams } from '../../routes/StackNavigator';
import { HamburguerMenu } from '../../components/HamburguerMenu';


export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(()=>{
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={()=> {navigation.dispatch(DrawerActions.toggleDrawer)}}>
  //         <Text>
  //           Menu
  //         </Text>
  //       </Pressable>
  //     )
  //   })
  // })

  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />
        <CustomButton funct={() => navigation.navigate('Products')} title="Productos"  />
        <CustomButton funct={() => navigation.navigate('Settings')} title="Settings"  />
    </View>
  )
}
