import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import React, { useContext } from 'react';
import { UseAnimation } from '../../hooks/UseAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import CustomView from '../ui/CustomView';

const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);

  const { FadeIn, FadeOut, animatedOpacity, animatedTop, startMovingTop } = UseAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View style={[
        styles.purpubleBox,
        {backgroundColor: colors.primary},
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop,
          }],
        }]}
      />
      <Pressable 
      onPress={() => {
        FadeIn({});
        startMovingTop({ initialPosition: -100, easing: Easing.bounce, duration: 700 });
      }}>
        <Text style={{color: colors.text}}>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => FadeOut({})}>
        <Text style={{color: colors.text}}>FadeOut</Text>
      </Pressable>
    </CustomView>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpubleBox: {
    width: 150,
    height: 150,
  },
});
