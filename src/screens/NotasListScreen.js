import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemNota from '../components/ItemNota'
import { useDispatch, useSelector } from 'react-redux'
import { loadNotas } from '../store/actions/notas.action'

const NotasListScreen = ({ navigation }) => {

    const notas = useSelector(state => state.notas.notas)

    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(loadNotas());
    }, []);

    const renderNota = (data) => (
        <ItemNota
            titulo={data.item.titulo}
            nota={data.item.nota}
            image={data.item.image}
            onSelect={() => navigation.navigate("Detalle")}
        />
    )

    return (
        <FlatList style={{ flex: 1 }}
            data={notas}
            renderItem={renderNota}
            keyExtractor={item => item.id}
        />
    )
}

export default NotasListScreen;