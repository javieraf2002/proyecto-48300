import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Trabajo } from "../";

const Lista = ({
    listaTareas,
    SeleccionarTarea

}) => {
    return (
        <FlatList
            data={listaTareas}
            renderItem={(itemData) => {
                return (
                    <Trabajo
                        itemData={itemData}
                        SeleccionarTarea={SeleccionarTarea}
                    >
                    </Trabajo>
                )
            }}
            keyExtractor={(item) => item.id.toString()}
        >
        </FlatList>
    )
}

export default Lista

const styles = StyleSheet.create({})