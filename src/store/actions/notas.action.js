import * as FileSystem from 'expo-file-system'

export const ADD_NOTA = 'ADD_NOTA'

export const addNota = (titulo, nota, image) => {
    //return { type: ADD_NOTA, payload: { titulo, nota, image } }
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName
        try {
            console.log(Path);
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }
        dispatch({type: ADD_NOTA, payload: {titulo, nota, image: Path}})
    }
}