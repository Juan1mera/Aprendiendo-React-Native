import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store'

export const SettingsScreen = () => {

  const num= useCounterStore(state => state.count)

  const incrementBy = useCounterStore(state => state.incrementBy)

  return (
    <View>
        <Text style={styles.title}>
            {num}
        </Text>


        <Pressable style={styles.primaryButton}
          onPress={() => incrementBy(1)}
        >
          <Text>+1</Text>
        </Pressable>
        
        <Pressable style={styles.primaryButton}
          onPress={() => incrementBy(-1)}
        >
          <Text>-1</Text>
        </Pressable>
    </View>
  )
}
