import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Boton = ({
    onPress,
    Texto,
    styleButtonType
}) => {
    return (
        <Pressable
            style={[styles.btn, styleButtonType]}
            onPress={onPress}
        >
            <Text style={styles.textStyle}>{Texto}</Text>
        </Pressable>
    )
}

export default Boton

const styles = StyleSheet.create({
    btn: {
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 10,
    },
})