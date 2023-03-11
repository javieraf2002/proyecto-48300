import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Alerta = ({ style }) => {
    return (
        <View >
            <Text style={[styles.circle, style]}></Text>
        </View>
    )
}

export default Alerta

const styles = StyleSheet.create({
    circle: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
    }
})