import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import Card from '../Card';
import AgregarTrabajo from '../AgregarTrabajo';
import Lista from '../ListaTrabajos/Lista';
import CartelModal from '../CartelModal';

const Principal = ({
    listaTareas, 
    tarea,
    modalVisible,
    selTarea,
    onChangeText, 
    onChangePrioridad, 
    onCancelModal,
    AgregarTarea,
    EliminarTarea, 
    TerminarTarea,
    SeleccionarTarea,
    Press }) => {
    return (
        <View>
            {/* AGREGAR TAREAS */}
            <Card
                style={styles.card}
            >
                <AgregarTrabajo
                    tarea={tarea}
                    onChangeText={onChangeText}
                    onChangePrioridad={onChangePrioridad}
                    Press={Press}
                    AgregarTarea={AgregarTarea}
                    placeholder='Ingresar Tarea'
                />
            </Card>
            {/* LISTA DE TAREAS */}
            <Lista
                listaTareas={listaTareas}
                SeleccionarTarea={SeleccionarTarea}
            />
            {/* MODAL DE CONFIRMACION */}
            <CartelModal
                modalVisible={modalVisible}
                selTarea={selTarea}
                onCancelModal={onCancelModal}
                TerminarTarea={TerminarTarea}
                EliminarTarea={EliminarTarea}
            />
        </View>
    )
}

export default Principal

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    card: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
});