import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CustomButton } from '../../components/CustomButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

  const {top} = useSafeAreaInsets();
  const navigation = useNavigation() ;


  return (
    <View style={{
      flex:1,
      paddingHorizontal: 20,
      marginTop: top +10
    }}>
        <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>Profile</Text>


        <CustomButton 
          funct={() => {
            navigation.dispatch(DrawerActions.toggleDrawer)
          }}
          title='Abrir Menu'
        />
    </View>
  )
}
