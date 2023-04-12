import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ItemTarea from '../components/ItemPendiente'
//PARA UTILIZAR REDUX USAMOS LOS HOOKS QUE NOS PERMITE TRAER COSAS DESDE EL ESTADO
import { useSelector } from 'react-redux'

const ScreenPendientes = ({ route, navigation }) => {

    const { categoriaId } = route.params

    //LAS TAREAS FILTRADAS POR CATEGORIA
    const tareas = useSelector((state) => state.tareas.filtroTareas)
    //TRAER LA CATEGORIA POR SU ID
    const categoria = useSelector(state => state.categorias.selected);
    const renderItemTarea = ({ item }) => (<ItemTarea tarea={item}></ItemTarea>)

    return (
        <FlatList
        data={tareas}
        keyExtractor={(tarea) => tarea.id}
        renderItem={renderItemTarea}
        numColumns={1}
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