import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ScreenPrincipal from '../screens/ScreenPrincipal';
import ScreenPendientes from '../screens/ScreenPendientes';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Principal'
            // PROPIEDADES COMUNES A TODAS LAS SCREENS
            // screenOptions={{
            //     headerStyle: {
            //         backgroundColor: COLORES.accept
            //     },
            //     headerTintColor: COLORES.primary,
            //     headerTitleStyle: {
            //         fontWeight: 'bold',
            //         fontSize: 20,
            //         fontFamily: 'OpenSans_400Regular'
            //     },
            // }}
        >
            <Stack.Screen 
                name='Principal'
                component={ScreenPrincipal}
            ></Stack.Screen>
            <Stack.Screen
                name='Pendientes'
                component={ScreenPendientes}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})