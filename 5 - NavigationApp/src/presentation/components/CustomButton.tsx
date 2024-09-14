import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { globalStyles } from '../theme/theme'
import { useNavigation,NavigationProp } from '@react-navigation/native'
import { RootStackParams } from '../routes/StackNavigator'

interface Props {
    funct: () => void,
    title: string,

}

export const CustomButton = ({funct, title}: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable style={globalStyles.primaryButton}
      onPress={funct}
    >
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  )
}