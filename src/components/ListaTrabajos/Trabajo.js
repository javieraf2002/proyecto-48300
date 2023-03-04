import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Trabajo = ({
    itemData,
    SeleccionarTarea
}) => {
    return (
        <Pressable
            style={styles.tarea}
            onPress={() => { SeleccionarTarea(itemData.item); }}
        >
            <Text style={styles.tarea_text}>{itemData.item.value}</Text>
        </Pressable>
    )
}

export default Trabajo

const styles = StyleSheet.create({
    tarea: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#ccc",
    },
    tarea_text: {
        padding: 10,
        textAlign: "center",
    },
})