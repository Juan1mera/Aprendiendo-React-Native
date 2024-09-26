import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/theme/styles'
import { usePermissionStore } from '../../stores/permissions/usePermissionStore'

const PermissionScreen = () => {

  const {locationStatus, requestLocationPermission} = usePermissionStore()

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Habilitar Ubicacion</Text>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}
      >
        <Text style={{color:'white'}}>Habilitar</Text>
      </Pressable>

      <Text>Estado Actual: {locationStatus}</Text>
    </View>
  )
}

export default PermissionScreen