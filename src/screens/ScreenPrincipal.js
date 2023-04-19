import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
//PARA UTILIZAR REDUX USAMOS EL HOOK
import { useSelector, useDispatch } from 'react-redux'
import { filterTareas } from '../store/actions/tareas.action'

import ItemCategoria from '../components/ItemCategoria'

const ScreenPrincipal = ({ navigation }) => {

    const categorias = useSelector(state => state.categorias.categorias)
    const dispatch = useDispatch()

    //EVENTO PARA FILTRAR POR CATEGORIA
    const onSelectItemCategoria = (categoria) => {
        
        dispatch(filterTareas(categoria.id));
        
        navigation.navigate('Pendientes', {
            //OBJETO CON LAS PROPIEDADES QUE SE LE PASA A LA PANTALLA (Productos)
            //PASAN A TRAVES DE LA PROPIEDAD ROUTE
            categoriaNombre: categoria.nombre,
        })
    }

    //RENDERIZADO DE CADA CATEGORIA
    const renderItemCategoria = ({ item }) => (<ItemCategoria categoria={item} onSelected={onSelectItemCategoria}></ItemCategoria>)
    //OTRA FORMA DE ARMAR  LA FUNCIÓN ANTERIOR
    const renderItemCategoria_Alt = (item)=>{
        return (
            <ItemCategoria categoria={item} onSelected={onSelectItemCategoria}></ItemCategoria>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={categorias}
                keyExtractor={(categoria) => categoria.id}
                renderItem={renderItemCategoria}
                numColumns={1} //NO SE PUEDE CAMBIAR EN TIEMPO DE EJECUCIÓN, HAY QUE HACER UN RELOAD
            >
            </FlatList>
        </View>
    )
}

export default ScreenPrincipal

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})