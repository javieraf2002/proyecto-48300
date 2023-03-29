import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenNueva = () => {
    return (
        <View style={styles.screen}>
            <Text>Tab Nueva</Text>
        </View>
    )
}

export default ScreenNueva

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})