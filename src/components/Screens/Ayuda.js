import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Boton from '../Boton'
import colores from '../../../src/constantes/colores'

const Ayuda = ({ Press }) => {
    return (
        <View style={styles.contenedor}>
            <View>
                <Boton
                    styleButtonType={styles.btn_volver}
                    Texto='VOLVER'
                    onPress={() => { Press(true) }}
                ></Boton>
            </View>
            <Text style={styles.txtAyuda}>Ayuda</Text>
            <Text style={styles.txtConstruccion}>Pantalla en construcción</Text>
            <Image
                style={styles.img}
                source={require('../../../imagenes/construccion.png')}
            >
            </Image>
        </View>
    )
}

export default Ayuda

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtAyuda: {
        fontSize: 60,
    },
    txtConstruccion: {
        fontSize: 30,
    },
    img: {
        marginTop: 50,
        width: 100,
        height: 100,
    },
    btn_volver: {
        backgroundColor: colores.accept,
        marginBottom:100,
    }
});