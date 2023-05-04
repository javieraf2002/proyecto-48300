import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//ICONOS TABS

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//SCREENS DE NAVEGACIÓN

import StackNavigator from './StackNavigator';
import StackNotas from './StackNotas';
import ScreenNueva from '../screens/ScreenNueva';
import ScreenRealizadas from '../screens/ScreenRealizadas';

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen
                name='Principal-Tab'
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="md-home-outline" size={24} color="black" />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Inicio</Text>
                        </View>
                    )
                }}
            ></BottomTabs.Screen>
            <BottomTabs.Screen
                name='Nuevas-Tab'
                component={ScreenNueva}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Entypo name="new-message" size={24} color="black" />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Nuevas</Text>
                        </View>
                    )
                }}
            ></BottomTabs.Screen>
            <BottomTabs.Screen
                name='Realizadas-Tab'
                component={ScreenRealizadas}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialCommunityIcons name="archive-cancel-outline" size={24} color="black" />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Realizadas</Text>
                        </View>
                    )
                }}
            ></BottomTabs.Screen>
            <BottomTabs.Screen
                name='Notas-Tab'
                component={StackNotas}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialIcons name="event-note" size={24} color="black" />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Notas</Text>
                        </View>
                    )
                }}
            ></BottomTabs.Screen>            
        </BottomTabs.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})