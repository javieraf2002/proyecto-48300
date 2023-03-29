import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ItemRealizada = ({ tarea, onDelete }) => {
    return (
        <View style={styles.itemCart}>
            <Text style={styles.header}>{tarea.tarea}</Text>
            <View style={styles.detail}>
                <Text style={styles.text}>{tarea.estado}</Text>
                <Text style={styles.text}>{tarea.fecha.toLocaleDateString()}</Text>
            </View>
            <TouchableOpacity
                onPress={() => onDelete(tarea)}
            >
                <Ionicons name="md-trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    )
}

export default ItemRealizada

const styles = StyleSheet.create({
    itemCart: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
    }
})