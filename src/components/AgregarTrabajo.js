import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

const AgregarTrabajo = ({
    tarea,
    onChangeText,
    AgregarTarea,
    placeholder,
    title
}) => {
    return (
        <View style={styles.contenedor_agregar}>
            <TextInput
                placeholder={placeholder}
                style={styles.contenedor_agregar_input}
                onChangeText={onChangeText}
                value={tarea}
            />
            <Button title={title} onPress={AgregarTarea} />
        </View>
    )
}

export default AgregarTrabajo;

const styles = StyleSheet.create({
    contenedor_agregar: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contenedor_agregar_input: {
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
})