import { View, Text, StyleProp, Image, ImageStyle, Animated, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { UseAnimation } from '../../hooks/UseAnimation';

interface Props{
    uri: string;
    style?: StyleProp<ImageStyle>;
}


const FadeIn = ({uri, style}:Props) => {

    const [isLoading, setIsLoading] =useState(true)
    const {animatedOpacity, FadeIn} = UseAnimation()
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <ActivityIndicator 
            style={{position: 'absolute'}}
            color="grey"
            size={30}
        />

        <Animated.Image 
            source={{uri}}
            onLoadEnd={() => {
                setIsLoading(false) 
                FadeIn({duration: 500, toValue: 1})
            }}
            style={[style, {opacity: animatedOpacity}]}
        />
      
    </View>
  )
}

export default FadeIn