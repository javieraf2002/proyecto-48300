import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colores from '../constantes/colores'

const Header = ({titulo}) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    contenedor:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:Colores.header,
        alignItems:'center',
        justifyContent:'center'
        },
    titulo:{
        color:Colores.titulo,
        fontSize:22,
    }
})