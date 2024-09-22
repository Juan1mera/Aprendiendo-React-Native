
import 'react-native-gesture-handler';

import React, { PropsWithChildren } from 'react'
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeContextProvider } from './presentation/context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

const PokedexApp = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
        <StackNavigator  />
    </ThemeContextProvider>
    </QueryClientProvider>
  )
}

export default PokedexApp