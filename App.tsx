import React from 'react';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { ThemeProvider } from 'styled-components/native';

import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  )
} 
