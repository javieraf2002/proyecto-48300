import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemCategoria = ({ categoria, onSelected }) => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity
                onPress={()=>onSelected(categoria)}
                style={[styles.contenedor, { backgroundColor: categoria.color }]}
            >
                <View>
                    <Text style={styles.title}>{categoria.nombre}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ItemCategoria

const styles = StyleSheet.create({
    screen:{
        marginTop:40,                                 
    },
    contenedor: {
        flex: 1,
        width:300,
        height:50,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        padding: 8,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'OpenSans_700Bold',
        color:'white'
    },
})