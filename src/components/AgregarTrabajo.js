import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton'
import Boton from './Boton'
import colores from '../constantes/colores'

const AgregarTrabajo = ({
    tarea,
    onChangeText,
    onChangePrioridad,
    Press,
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
                    <Boton
                        styleButtonType={styles.btn_agregar}
                        Texto='AGREGAR'
                        onPress={AgregarTarea}
                    />
                </View>
            </View>
            <RadioButton
                press={onChangePrioridad}
            ></RadioButton>
            <Boton
                styleButtonType={styles.btn_ayuda}
                Texto='AYUDA' 
                onPress={() => { Press(false) }}
                />
        </View>
    )
}

export default AgregarTrabajo;

const styles = StyleSheet.create({
    contenedor_agregar: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    contenedor_agregar_input: {
        marginTop: 10,
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    btn_ayuda: {
        backgroundColor: colores.verde,
        marginVertical: 10,
    },
    btn_agregar: {
        backgroundColor: colores.accept,
        marginVertical: 4,
        marginLeft:30,
    }
})