import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton'

const AgregarTrabajo = ({
    tarea,
    onChangeText,
    onChangePrioridad,
    AgregarTarea,
    placeholder,
}) => {
    return (
        <View>
            <View style={styles.contenedor_agregar}>
                <View>
                    <TextInput
                        placeholder={placeholder}
                        style={styles.contenedor_agregar_input}
                        onChangeText={onChangeText}
                        value={tarea}
                    />
                </View>
                <View>
                    <Button title='AGREGAR' onPress={AgregarTarea} />
                </View>
            </View>
            <RadioButton              
                press={onChangePrioridad}
            ></RadioButton>
        </View>
    )
}

export default AgregarTrabajo;

const styles = StyleSheet.create({
    contenedor_agregar: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
    },
    contenedor_agregar_input: {
        marginTop: 10,
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
})