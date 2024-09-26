
import { View, Text } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { AppState } from 'react-native'
import { usePermissionStore } from '../stores/permissions/usePermissionStore'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParam } from '../navigation/Navigator'
import { StackNavigationProp } from '@react-navigation/stack'

const PermissionsCheker = ({children}: PropsWithChildren) => {

  const {locationStatus, checkLocationPermission} = usePermissionStore()

  const navigation = useNavigation<StackNavigationProp<RootStackParam>>()

  useEffect(() => {
    if(locationStatus === 'granted'){
      navigation.reset({
        routes: [{name: 'MapScreen'}]
      })
    } else if(locationStatus != 'undetermined'){
      navigation.reset({
        routes: [{name: 'PermissionScreen'}]
      })
    }
  }, [locationStatus])

  useEffect(()=>{
    checkLocationPermission();
  })

  useEffect(() =>{
    const subscription =  AppState.addEventListener('change', (nextAppState) => {
      if(nextAppState === 'active'){
        checkLocationPermission();
      }
    });

    return () => {
        subscription.remove();
    }
  },[])



  return(
    <>
        {children}
    </>
  )
}

export default PermissionsCheker