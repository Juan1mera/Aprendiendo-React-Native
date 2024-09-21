import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../ui/CustomView'
import Title from '../../components/Title'
import { globalStyles } from '../../../config/theme/theme'
import Button from '../ui/Button'
import { showPrompt } from '../../../config/theme/adapters.prompt.adapter'
import { ThemeContext } from '../../context/ThemeContext'



const AlertScreen = () => {
  const { isDark } = useContext(ThemeContext);


  const createTwoButtonAlert = () =>{
    

    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',

      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],{
      userInterfaceStyle: isDark ? 'dark' : 'light',
    });}

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {
      userInterfaceStyle: isDark ? 'dark' : 'light',
    }
  );


    const onShowPrompt = () => {

      showPrompt({
        title: 'Cual es tu nombre',
        subtitle: 'Elit cupidatat laborum amet dolore ad.',
        buttons: [
          {text: "Ok", onPress: () => console.log('Ok Pressed')}
        ],
        placeholder: 'valor por defecto',
      })

      // ! Codigo nativo
      // Alert.prompt( // En android no funciona
      //   "Cual es tu nombre", 
      //   'Elit cupidatat laborum amet dolore ad.',
      //   (valor:string) => {console.log(valor)},
      //   'secure-text',
      //   'valor por defecto',
      //   'number-pad'
      // )
    }

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text='Alerts' />
      <Button
        text='Alert-1'
        onPress={createTwoButtonAlert}
      />
      <View style={{height: 10}} />
      <Button
        text='Alert-2'
        onPress={createThreeButtonAlert}
      />
      <View style={{height: 10}} />

      <Button
        text='Input'
        onPress={onShowPrompt}
      />
    </CustomView>
  )
}

export default AlertScreen