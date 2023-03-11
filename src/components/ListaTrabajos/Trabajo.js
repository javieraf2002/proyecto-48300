import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from '../Card';
import colores from '../../constantes/colores';
import Alerta from '../Alerta';

const Trabajo = ({
    itemData,
    SeleccionarTarea
}) => {

    let condicion = itemData.item.prioridad;
    if (itemData.item.terminado === true) condicion = 9;
    console.log('condicion:', condicion);
    return (
        <Pressable
            style={styles.tarea}
            onPress={() => { SeleccionarTarea(itemData.item); }}
        >
            <Card style={styles.contenedor}>
                <Text style={styles.tarea_text}>{itemData.item.value}</Text>
                { 
                    condicion == 0
                        ? <Alerta style={styles.verde}></Alerta>
                        : condicion == 1
                            ? <Alerta style={styles.amarillo}></Alerta>
                            : condicion == 2  
                                ?<Alerta style={styles.rojo}></Alerta>
                                :<Alerta style={styles.gris}></Alerta>
                }
            </Card>
        </Pressable>
    )
}

export default Trabajo

const styles = StyleSheet.create({
    tarea: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    tarea_text: {
        padding: 10,
        textAlign: "left",
    },

    verde: {
        backgroundColor: colores.verde,
        marginRight: 10,
    },
    amarillo: {
        backgroundColor: colores.amarillo,
        marginRight: 10,
    },
    rojo: {
        backgroundColor: colores.rojo,
        marginRight: 10,
    },
    gris: {
        backgroundColor: colores.gris,
        marginRight: 10,
    },
    contenedor: {
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})