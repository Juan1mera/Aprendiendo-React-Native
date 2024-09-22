import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator, useTheme } from 'react-native-paper'

const FullScreenLoader = () => {

  const {colors} =useTheme()

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
        <ActivityIndicator size='large' color='white' />
    </View>
  )
}

export default FullScreenLoader