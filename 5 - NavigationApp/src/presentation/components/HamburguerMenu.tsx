import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable,Text, View  } from 'react-native';
import { IonIcons } from './IonIcons';

export const HamburguerMenu = () => {
  
    const navigation = useNavigation();

    useEffect(() =>{
      navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}
            style={{marginLeft: 5}}
          >
            <IonIcons name='menu' />
          </Pressable>
        )
      })
    })
  
    return (<></>);
}
