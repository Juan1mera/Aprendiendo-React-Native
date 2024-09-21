import 'react-native-gesture-handler'; 
import React, { Children, useContext } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './navigator/Navigator';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';
import { PropsWithChildren } from 'react';

// const AppTheme = ({children}: PropsWithChildren) => {

//   return (
//     <ThemeProvider>
//       <AppNavigation>
//       {children}
//       </AppNavigation>
//     </ThemeProvider>
//   )
// }

// const AppNavigation = ({children}: PropsWithChildren) => {

//   const {isDark} = useContext(ThemeContext);
//   return(
//     <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
//       {children}
//     </NavigationContainer>
//   )
// }

const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <NavigatorStack />
    </ThemeProvider>
  );
}

export default ComponentsApp;
