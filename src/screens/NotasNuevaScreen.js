import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addNota } from '../store/actions/notas.action'

const NotasNuevaScreen = () => {

    const dispatch = useDispatch;

    const [tituloValue, setTituloValue] = React.useState('')
    const [notaValue, setNotaValue] = React.useState('')
    const [imageValue, setImageValue] = React.useState('')

    const tituloChange = text => {
        setTituloValue(text)
    }

    const notaChange = text => {
        setNotaValue(text)
    }

    const GrabarNota = () => {
        dispatch(addNota(tituloValue, notaValue, imageValue))
        navigation.navigate('Notas')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={tituloChange}/>
                <Text style={styles.label}>Nota</Text>
                <TextInput style={styles.input} onChangeText={notaChange}/>
                {/* <ImageSelector onImage={image=>setImageValue(image)} /> */}
                <Button title="Guardar" color="#394867" onPress={GrabarNota} />
            </View>
        </ScrollView>    )
}

export default NotasNuevaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})