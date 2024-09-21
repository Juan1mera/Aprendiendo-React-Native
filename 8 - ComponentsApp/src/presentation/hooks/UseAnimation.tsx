import { View, Text, Animated, Easing, PanResponder } from 'react-native'
import React, { useRef } from 'react'

export const UseAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current
    const animatedTop = useRef(new Animated.Value(0)).current
  
    const FadeIn = ({duration= 300, toValue = 1, callBack = () =>{}}) =>{
  
      Animated.timing(animatedOpacity, {
          toValue: toValue,
          duration: duration,
          useNativeDriver: true,
      }).start(callBack)
    }
    const FadeOut = ({duration= 300, toValue = 0, callBack = () =>{}}) =>{
      Animated.timing(animatedOpacity, {
          toValue: toValue,
          duration: duration,
          useNativeDriver: true,
      }).start(callBack)
    }

    const startMovingTop = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = () => {}
    }) =>{
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing
        }).start(callback)
    }


    // <------ AnimationXY
    const pan = useRef(new Animated.ValueXY()).current;
    const AnimatedXY = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],{useNativeDriver: false}),
      onPanResponderRelease: () => {
        Animated.spring(
          pan,
          {toValue: {x: 0, y: 0}, useNativeDriver: false}, 
        ).start();
      },
    });



  return {
    animatedOpacity,
    animatedTop, 
    AnimatedXY,
    pan,
    startMovingTop,
    FadeOut,
    FadeIn
  }
}
