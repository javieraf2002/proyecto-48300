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
            <View>
                <TextInput
                    placeholder={placeholder}
                    style={styles.contenedor_agregar_input}
                    onChangeText={onChangeText}
                    value={tarea}
                />
                <TextInput
                    placeholder='Fecha del trabajo'
                    style={styles.contenedor_agregar_input}
                >
                </TextInput>
            </View>
            <View
                style={styles.contenedor_agregar_button}
            >
                <Button title={title} onPress={AgregarTarea} />
            </View>
        </View>
    )
}

export default AgregarTrabajo;

const styles = StyleSheet.create({
    contenedor_agregar: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contenedor_agregar_input: {
        marginVertical: 20,
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    contenedor_agregar_button: {
        marginTop: 60,
    }
})