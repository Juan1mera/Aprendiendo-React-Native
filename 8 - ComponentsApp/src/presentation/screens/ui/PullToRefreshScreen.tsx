import { View, Text, RefreshControl } from 'react-native'
import React, { useContext, useState } from 'react'
import Title from '../../components/Title'
import CustomView from './CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext'

const PullToRefreshScreen = () => {
  const { colors } = useContext(ThemeContext);

  const [isRefreshing, setisRefreshing] = useState(false)
  const {top} = useSafeAreaInsets()
  const onRefresh = () => {
    setisRefreshing(true)
    setTimeout(() => {
      setisRefreshing(false)
    }, 5000)
  }
  return (
    <ScrollView
        refreshControl={<RefreshControl 
                refreshing={isRefreshing}
                progressViewOffset={top}
                onRefresh={onRefresh}
                colors={[colors.primary, 'red', 'green', 'blue']}
            />}
        style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
      <Title safe text='Pull to refresh' />
    </ScrollView>

  )
}

export default PullToRefreshScreen