export const ADD_NOTA = 'ADD_NOTA'

export const addNota = (titulo, nota, image) => {
    return { type: ADD_NOTA, payload: { titulo, nota, image } }
}