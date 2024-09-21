import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../ui/CustomView'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { Switch } from 'react-native-gesture-handler'
import CustomSwitch from '../ui/CustomSwitch'
import Separator from '../ui/Separator'

const SwitchScreen = () => {

  // const [isEnable, setIsEnable] = useState(false)
  // const toggleSwitch = () => setIsEnable(previousState => !previousState)

  const [state, setState] =useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })
  return (
    <CustomView margin style={{marginTop: 20}}>
        <Card>
          <CustomSwitch 
            isOn={state.isActive}
            text="Activo"
            onChange={(value) => setState({...state, isActive: value})}
          />
          <Separator />
          <CustomSwitch 
            isOn={state.isHungry}
            text="Tiene Hambre"
            onChange={(value) => setState({...state, isHungry: value})}
          />
          <Separator />

          <CustomSwitch 
            isOn={state.isHappy}
            text="Esta Feliz"
            onChange={(value) => setState({...state, isHappy: value})}
          />
        </Card>
    </CustomView>
  )
}

export default SwitchScreen