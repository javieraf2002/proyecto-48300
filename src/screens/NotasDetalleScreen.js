import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotasDetalleScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>NotasDetalleScreen</Text>
        </View>
    )
}

export default NotasDetalleScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})