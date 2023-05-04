import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans';
import MainNavigator from './src/navigators/MainNavigator';

//REDUX
import { Provider } from 'react-redux'
import store from './src/store/index'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  })

  React.useEffect(() => {
    if (fontsLoaded) {
      //HASTA QUE NO SE CARGO SIGUE APARECIENDO LA IMAGEN
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  //CUANDO LAS FUENTES YA SE CARGARON SIGUE LA APLICACIÓN
  if (!fontsLoaded) {
    return null;
  }

  return (
    //ANTES DE REDUX
    // <MainNavigator />
    //PARA PODER TRABAJAR CON NUESTRO STORE
    <Provider store={store}>
      {/* //IMPORTAMOS LA NAVEGACIÓN TODA LA APLICACIÓN */}
      <MainNavigator />
    </Provider>
  );
}
