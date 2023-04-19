import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotasListScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>NotasListScreen</Text>
        </View>
    )
}

export default NotasListScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
