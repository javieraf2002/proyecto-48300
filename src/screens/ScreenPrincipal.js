import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIAS } from '../data/categorias'

import ItemCategoria from '../components/ItemCategoria'

const ScreenPrincipal = ({ navigation }) => {

    //EVENTO PARA FILTRAR POR CATEGORIA
    const onSelectItemCategoria = (categoria) => {

        navigation.navigate('Pendientes', {
            //OBJETO CON LAS PROPIEDADES QUE SE LE PASA A LA PANTALLA (Productos)
            //PASAN A TRAVES DE LA PROPIEDAD ROUTE
            categoriaId: categoria.id,
            categoriaNombre: categoria.nombre
        })
    }

    //RENDERIZADO DE CADA CATEGORIA
    const renderItemCategoria = ({ item }) => (<ItemCategoria categoria={item} onSelected={onSelectItemCategoria}></ItemCategoria>)
    
    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIAS}
                keyExtractor={(categoria) => categoria.id}
                renderItem={renderItemCategoria}
                numColumns={1} //NO SE PUEDE CAMBIAR EN TIEMPO DE EJECUCION, HAY QUE HACER UN RELOAD
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