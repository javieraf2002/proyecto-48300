import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotasNuevaScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>NotasNuevaScreen</Text>
        </View>
    )
}

export default NotasNuevaScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})