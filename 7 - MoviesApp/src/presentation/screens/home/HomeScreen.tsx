import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const {isLoading, nowPlaying, Popular, TopRated, UpComing, popularNexPage} = useMovies()



  if (isLoading) {
    return(<FullScreenLoader />)
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />


        <HorizontalCarousel loadNextPage={popularNexPage} movies={Popular} title='Populares' />
        <HorizontalCarousel movies={TopRated} title='Mas amadas' />
        <HorizontalCarousel movies={UpComing} title='Proximamente' />
      </View>
    </ScrollView>
  )
}
