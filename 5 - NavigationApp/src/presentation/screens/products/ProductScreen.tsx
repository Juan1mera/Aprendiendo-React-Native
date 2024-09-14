import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {
  
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      title: params.name
    })
  })

  return (
    <View style={globalStyles.container}>
        <Text>Product Screen</Text>

        <Text style={{color: 'white'}}>{params.id} - {params.name}</Text>
    </View>
  )
}
