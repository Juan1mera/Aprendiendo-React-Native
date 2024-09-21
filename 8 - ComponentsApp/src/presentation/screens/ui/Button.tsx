import { View, Text, StyleProp, ViewStyle, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

const Button = ({text, styles, onPress}: Props) => {
  const {colors} = useContext(ThemeContext)

  return (
    <Pressable onPress={onPress}
      style={({pressed}) => [globalStyles.btnPrimary, {opacity: pressed ? 0.8 : 1}, styles]}>
      <Text style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
    </Pressable>
  )
}

export default Button;
