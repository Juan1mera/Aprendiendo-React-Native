import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../ui/CustomView'
import Title from '../../components/Title'
import Button from '../ui/Button'
import { ThemeContext } from '../../context/ThemeContext'

const ChangeThemeScreen = () => {

    const {setTheme, currentTheme, colors} = useContext(ThemeContext)


  return (
    <CustomView margin>
      <Title safe text={`Cambiar Tema: ${currentTheme}`} />
      <Button 
        text="Light"
        onPress={() => setTheme('light')}
      />
      <View style={{height: 10}} />
      <Button 
        text="Dark"
        onPress={() => setTheme('dark')}
      />
      <View style={{height: 10}} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  )
}

export default ChangeThemeScreen