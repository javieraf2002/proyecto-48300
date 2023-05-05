import * as FileSystem from 'expo-file-system'
import { insertNota, fetchNotas } from '../../db'

export const ADD_NOTA = 'ADD_NOTA'
export const LOAD_NOTAS = 'LOAD_NOTAS'

export const addNota = (titulo, nota, image) => {
    //return { type: ADD_NOTA, payload: { titulo, nota, image } }
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName
        try {
            ;
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }
        const dbResult = await insertNota(titulo, nota, Path)
        console.log('Db Result: ', dbResult);
        dispatch({ type: ADD_NOTA, payload: { id: dbResult.insertId, titulo, nota, image: Path } })
    }
}

export const loadNotas = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchNotas()
            //console.log('REGISTROS: ', dbResult.rows._array)
            dispatch({ type: LOAD_NOTAS, payload: { notas: dbResult.rows._array } })
        } catch (error) {
            throw error
        }
    }
}