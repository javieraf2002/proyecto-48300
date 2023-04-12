import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ItemRealizada from '../components/ItemRealizada'
import { filterRealizadas } from '../store/actions/tareas.action'
import { useSelector, useDispatch } from 'react-redux'

const ScreenRealizadas = () => {

    //FILTRADO POR ESTADO
    const dispatch = useDispatch()
    dispatch(filterRealizadas(2));
    const tareas = useSelector((state) => state.tareas.tareasFinalizadas)
    
    const renderItemTarea = ({ item }) => (<ItemRealizada tarea={item}></ItemRealizada>)

    return (
        <FlatList
            data={tareas}
            keyExtractor={(tarea) => tarea.id}
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