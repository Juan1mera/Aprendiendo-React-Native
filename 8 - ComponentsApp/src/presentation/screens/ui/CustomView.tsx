import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode, useContext } from 'react'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
  style?: StyleProp<ViewStyle>;
  children?:ReactNode;
  margin? :boolean;
}




const CustomView = ({style, children, margin}:Props) => {
  const {colors} = useContext(ThemeContext)

    
  return (
    <View style={[globalStyles.mainContainer,
      margin ? globalStyles.globalMargin : null
    ,{backgroundColor: colors.background},style]}>
      {children}
    </View>
  )
}

export default CustomView