import { View, FlatList } from 'react-native'
import React, { useMemo, useState } from 'react'
import { globalTheme } from '../../../config/theme/globalTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator, Text, TextInput } from 'react-native-paper'
import PokemonCard from '../../components/pokemons/PokemonCard'
import { Pokemon } from '../../../domain/entities/Pokemon'
import { useQuery } from '@tanstack/react-query'
import { getPokemonsByIds, getPokemonsNamesWithId } from '../../../actions'
import FullScreenLoader from '../../components/ui/FullScreenLoader'
import useDeboucedValue from '../../hooks/useDeboucedValue'

const SearchScreen = () => {

  const {top} = useSafeAreaInsets()
  const [ternm, setTernm] = useState('')

  const debouncedValue = useDeboucedValue(ternm)

  const {isLoading, data:pokemonList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonsNamesWithId()
  })



  const pokemonsNameList = useMemo(() => {
    if (!isNaN(Number(debouncedValue))){// Es un numero  
      const pokemon = pokemonList.find(pokemon => pokemon.id === Number(debouncedValue));
      return pokemon ? [pokemon] : [];
    }

    if(debouncedValue.length === 0 ) return [];
    if(debouncedValue.length < 3) return[];

    return pokemonList.filter(pokemon => pokemon.name.includes(debouncedValue.toLocaleLowerCase()));
  }, [debouncedValue])

  const {isLoading: isLoadingPokemons, data:pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonsNameList],
    queryFn: () => getPokemonsByIds(pokemonsNameList.map(pokemon => pokemon.id)),
    staleTime: Infinity,
  })


  if(isLoading){
    return (<ActivityIndicator />)
  }

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput 
        placeholder='Buscar Pokemon'
        mode='flat'
        autoFocus
        autoCorrect={false}
        onChangeText={setTernm}
        value={ternm}
      />

      {
        isLoadingPokemons &&  <ActivityIndicator />
      }

      <FlatList 
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{paddingTop: top+20}}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        // onEndReachedThreshold={0.6}
        // onEndReached={() => fetchNextPage()}
        ListFooterComponent={<View style={{height: 150}} />}
      />

      {/* <Text >{JSON.stringify(pokemonsNameList, null, 2)}</Text> */}


    </View>
  )
}

export default SearchScreen