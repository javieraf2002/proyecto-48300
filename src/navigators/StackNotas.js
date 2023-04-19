import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NotasListScreen from '../screens/NotasListScreen'
import NotasDetalleScreen from '../screens/NotasDetalleScreen'
import NotasNuevaScreen from '../screens/NotasNuevaScreen'

const Stack = createNativeStackNavigator();

const StackNotas = () => {
    return (
        // <View style={styles.screen}>
        //     <Text>StackNotas</Text>
        // </View>
        <Stack.Navigator>
            <Stack.Screen
                name='Notas'
                component={NotasListScreen}
            ></Stack.Screen>
            <Stack.Screen
                name='Detalle'
                component={NotasDetalleScreen}
            ></Stack.Screen>
            <Stack.Screen
                name='Agregar'
                component={NotasNuevaScreen}
            ></Stack.Screen>

        </Stack.Navigator>
    )
}

export default StackNotas

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})