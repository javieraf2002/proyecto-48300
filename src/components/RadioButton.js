import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'

const RadioButton = ({press }) => {
    const items = [
        { label: 'Normal', value: 0 },
        { label: 'Media', value: 1 },
        { label: 'Alta', value: 2 },
    ]

    const [valor, setValor] = useState(0);

    return (
        <View>
            <Text style={styles.titulo}>Seleccionar Prioridad</Text>
            <RadioForm
                radio_props={items}
                initial={valor}
                onPress={(valor) => {
                    press(valor)
                    setValor(valor)
                }}
                labelHorizontal={false}
                formHorizontal
            />
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    titulo: {
        color: 'black',
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 14,
    }
})