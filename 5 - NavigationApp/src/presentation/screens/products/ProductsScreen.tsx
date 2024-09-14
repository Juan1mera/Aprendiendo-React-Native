import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { CustomButton } from '../../components/CustomButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id:1, name: 'Producto 1'},
  {id:2, name: 'Producto 2'},
  {id:3, name: 'Producto 3'},
  {id:4, name: 'Producto 4'},
  {id:5, name: 'Producto 5'},
  {id:6, name: 'Producto 6'},
  {id:7, name: 'Producto 7'},
  
];

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
        <Text style={{color: 'white', fontSize: 30, marginBottom: 10}}>Productos</Text>
        <FlatList 
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CustomButton 
              funct={() => navigation.navigate('Product', { id: item.id, name: item.name })}
              title={item.name} 
            />
          )}
        />

        <CustomButton 
          funct={() => navigation.navigate('Settings')} 
          title='Ajustes'  
        />
    </View>
  )
}
