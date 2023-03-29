import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ItemTarea from '../components/ItemPendiente'
import { TAREAS } from '../data/tareas'

const ScreenPendientes = ({ route, navigation }) => {

    const { categoriaId } = route.params

    //FILTRADO POR CATEGORIA

    const tareas = TAREAS.filter(tarea => tarea.categoria === categoriaId)

    const renderItemTarea = ({ item }) => (<ItemTarea tarea={item}></ItemTarea>)

    return (
        <FlatList
            data={tareas}
            keyExtractor={(tarea) => { tarea.id }}
            renderItem={renderItemTarea}
        >
        </FlatList>
    )
}

export default ScreenPendientes

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})