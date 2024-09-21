import { View, Text, Modal, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from './ui/CustomView'
import Title from '../components/Title'
import Button from './ui/Button'
import { ThemeContext } from '../context/ThemeContext'

const ModalScreen = () => {

    const [isVisible, setisVisible] = useState(false)
    const { colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title safe text='Modal' />

    <Button 
        text='Show Modal'
        onPress={() => setisVisible(true)}
    />

    <Modal 
        visible={isVisible}
        animationType='slide'
    >
        <View style={{flex: 1, backgroundColor: colors.cardBackground}}>
            <View style={{paddingHorizontal: 10}}>
                <Title text='Modal Content' safe/>
            </View>

            <View style={{flex: 1}} />
                <Button 
                    text="Cerrar Modal"
                    onPress={() => setisVisible(false)}
                    styles={{
                        height: Platform.OS === 'android' ? 40 : 60,
                        borderRadius: 0
                    }}
                />
        </View>
    </Modal>


    </CustomView>
  )
}

export default ModalScreen