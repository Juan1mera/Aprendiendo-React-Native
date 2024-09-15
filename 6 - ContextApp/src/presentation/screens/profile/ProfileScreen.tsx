import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {

  const name= useProfileStore(state => state.name)
  const email= useProfileStore(state => state.email)
  const ChangeProfile = useProfileStore(state => state.changeProfile)

  return (
    <View>
        <Text style={styles.title}>
            {name}
        </Text>
        <Text style={styles.title}>
            {email}
        </Text>


        <Pressable style={styles.primaryButton}
          onPress={() => useProfileStore.setState({name: 'Juan Mera'})}
        >
          <Text>Cambiar Nombre</Text>
        </Pressable>
        <Pressable style={styles.primaryButton}
          onPress={() => useProfileStore.setState({email: 'JuanMera@gmail.com'})}
        >
          <Text>Cambiar Email</Text>
        </Pressable>


        <Pressable style={styles.primaryButton}
          onPress={() => ChangeProfile('John Doe', 'John.doe@gmail.com')}
        >
          <Text>Regresar Datos Originales</Text>
        </Pressable>
    </View>
  )
}
