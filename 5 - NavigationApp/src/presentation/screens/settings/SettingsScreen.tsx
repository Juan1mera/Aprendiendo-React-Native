import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { CustomButton } from '../../components/CustomButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={globalStyles.container}>
        <Text>Setting Screen</Text>
        <CustomButton 
          title='Regresar'
          funct={() => {navigation.goBack()}}
        />
        <CustomButton 
          title='Home'
          funct={() => {navigation.dispatch(StackActions.popToTop)}}
        />
    </View>
  )
}
