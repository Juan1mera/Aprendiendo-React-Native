import { View, Text, ViewStyle, StyleProp } from 'react-native'
import React, { useContext } from 'react'
import { colors, globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
    style?: StyleProp<ViewStyle>;

}

const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext)

  return (
    <View style={{
        backgroundColor: colors.cardBackground,
    }}>
    <View style={[
        {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8
        },
        style
    ]}>

    </View>
    </View>
  )
}

export default Separator