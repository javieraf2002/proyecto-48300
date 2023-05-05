import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemNota = ({ titulo, nota, image, onSelect }) => {
    //console.log(titulo)
    return (
        <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.info}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.nota}>{nota}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemNota

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#f9dbbd"
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    titulo: {
        color: "#da627d",
        fontSize: 18,
        marginBottom: 6
    },
    nota: {
        color: '#777',
        fontSize: 16,
    }
})