import { View, Text, StyleSheet, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { Switch } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, text, onChange }: Props) => {
  const { colors } = useContext(ThemeContext);
  
  const [isEnable, setIsEnable] = useState(false)
  const toggleSwitch = () => setIsEnable(previousState => !previousState)


  return (
    <View style={[
        styles.switchRow,
        {backgroundColor: colors.cardBackground}
        ]}>
        {
          text && <Text style={{color: colors.text}}>{text}</Text>
        }

        <Switch
          thumbColor={Platform.OS === 'android' ? colors.primary : ''}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={isOn} />
    </View>
  )
}

export default CustomSwitch


const styles = StyleSheet.create({
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    }
})