import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemTarea = ({ tarea, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(tarea)}>
            <View style={styles.itemProducto}>
                <View>
                    <Text styleÇ={styles.title}>{tarea.tarea}</Text>
                </View>
                <View>
                    <Text style={styles.details}>Categoria: {tarea.categoria}</Text>
                    <Text style={styles.details}>Estado: {tarea.estado}</Text>
                    <Text style={styles.details}>Fecha: {tarea.fecha.toLocaleDateString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemTarea

const styles = StyleSheet.create({

    itemProducto: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    },
    details: {
        fontSize: 10
    }
})