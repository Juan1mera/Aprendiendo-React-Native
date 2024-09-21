import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CustomView from './ui/CustomView'
import Title from '../components/Title'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../../config/theme/theme';
import FadeIn from './ui/FadeIn'

const InfiniteScrollScreen = () => {

    const [number, setnumber] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        const newArray = Array.from({length: 5}, (_, i) => number.length + i)
        setnumber([...number, ...newArray])
        // setnumber([...number, ...number])
    }

  return (
    <View style={{backgroundColor: 'black'}}>

      <FlatList 
        data={number}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}

        ListFooterComponent={()=> (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}  

        // renderItem={({item}) => <Text style={{
        //         height: 300, 
        //         backgroundColor:colors.primary,
        //         color: 'white',
        //         textAlign: 'center',
        //         fontSize: 50,
        // }}>{item}</Text>}
      />
    </View >
  )
}


export default InfiniteScrollScreen


interface ListItemsProps{
  number: number;
}


const ListItem = ({number}: ListItemsProps) => {
  return(

    <FadeIn 
      uri={`https://picsum.photos/id/${number}/300/300`}
      style={{
        height: 400,
        width: '100%'
      }}
    />
    // <Image 
    //   source={{uri: `https://picsum.photos/id/${number}/300/300`}}
    //   style={{
    //       height: 400,
    //       width: '100%' 

    //   }}
    // />
  )
}