import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
    text: string;
    safe?: boolean;
    background?: string;
}

const Subtitle = ({text, safe, background}:Props) => {
    const {top} = useSafeAreaInsets()
    const { colors } = useContext(ThemeContext);



  return (
    <View style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: background, 
    }}>
      <Text style={{color: colors.text, fontSize: 20}}>{text}</Text>
    </View>
  )
}

export default Subtitle