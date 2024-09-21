import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../ui/CustomView'
import Title from '../../components/Title'
import { globalStyles } from '../../../config/theme/theme'
import Card from '../ui/Card'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext'

const TextInputScreen = () => {
  const { colors } = useContext(ThemeContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })    

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView>
    <CustomView margin>
      <Title safe text='TextInputs' />
        <Card>
            <TextInput 
                style={globalStyles.input}
                placeholder='Nombre Completo'
                autoCapitalize={'words'}
                autoCorrect={false}
                onChangeText={value => setForm({...form, name:value}) } 
            />
            <TextInput 
                style={globalStyles.input}
                placeholder='Correo Electronico'
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={value => setForm({...form, email:value}) } 
            />
            <TextInput 
                style={globalStyles.input}
                placeholder='Numero Telefonico'
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType='phone-pad'
                onChangeText={value => setForm({...form, phone:value}) } 
            />
        </Card>

        <View style={{height: 10}} />

        <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>

        <Card>
        <View style={{height: 10}} />

        <TextInput 
                style={globalStyles.input}
                placeholder='Numero Telefonico'
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType='phone-pad'
                onChangeText={value => setForm({...form, phone:value}) } 
            />
        </Card>
        <View style={{height: 50}} />

       
    </CustomView>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default TextInputScreen