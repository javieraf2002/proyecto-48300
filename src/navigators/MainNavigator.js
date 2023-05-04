import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import AuthNavigator from './AuthNavigator'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

    // isAuth = useSelector(state=>state.auth.userId);
    isAuth = false;
    return (
        <NavigationContainer>
            {isAuth ? <TabsNavigator></TabsNavigator> : <AuthNavigator></AuthNavigator>} 
            {/* <TabsNavigator></TabsNavigator> */}
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})