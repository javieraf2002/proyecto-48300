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
        width:80,
        height:40,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems:'center',
        justifyContent:'center'        
    },
    textStyle:{
        color:'white'
    }
})