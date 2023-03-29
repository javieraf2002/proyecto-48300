import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ItemRealizada from '../components/ItemRealizada'
import { TAREAS } from '../data/tareas'

const ScreenRealizadas = () => {

    //FILTRADO POR ESTADO

    const tareas = TAREAS.filter(tarea => tarea.estado === 2)

    const renderItemTarea = ({ item }) => (<ItemRealizada tarea={item}></ItemRealizada>)

    return (
        <FlatList
            data={tareas}
            keyExtractor={(tarea) => { tarea.id }}
            renderItem={renderItemTarea}
        >
        </FlatList>
    )
}

export default ScreenRealizadas

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})