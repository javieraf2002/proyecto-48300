import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenRealizadas = () => {
    return (
        <View style={styles.screen}>
            <Text>Tab Realizadas</Text>
        </View>
    )
}

export default ScreenRealizadas

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})