import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenRegistro from '../screens/ScreenRegistro';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Register'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name='Register'
                component={ScreenRegistro}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthNavigator