import { StyleSheet, View } from 'react-native'
import React from 'react'
import colores from '../constantes/colores'

const Card = ({style, children}) => {
    return (
        <View style={[styles.cardcontenedor, style]}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardcontenedor: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: colores.fondo,
        flexDirection:'row',  
    },
})