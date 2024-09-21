import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import { colors } from '../../../config/theme/theme';
import { UseAnimation } from '../../hooks/UseAnimation';
import CustomView from '../ui/CustomView';

export const Animation102Screen = () => {
    const {AnimatedXY, pan} = UseAnimation()
  
    return (
      <CustomView style={styles.container}>
        <Animated.View
          {...AnimatedXY.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </CustomView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: colors.primary,
      width: 80,
      height: 80,
      borderRadius: 4,
    },
  });