import React from 'react';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { ThemeProvider } from 'styled-components/native';

import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { AuthContextProvider } from './src/data/contexts/AuthContext';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
} 
