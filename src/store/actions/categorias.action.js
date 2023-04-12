//CONSTANTE CON AL ACCIÓN
export const SELECT_CATEGORIA = 'SELECT_CATEGORIA'
//TRABAJAR CON FIREBASE
export const ADD_CATEGORIA = 'ADD_CATEGORIA';
export const REMOVE_CATEGORIA = 'REMOVE_CATEGORIA';
export const CONFIRM_CATEGORIA = 'CONFIRM_CATEGORIA';

//FUNSION QUE SELECCIONA UNA CATEGORIA
export const selectCategoria = (id) => ({
    //DATOS QUE DEVUELVE LA FUNSION
    type: SELECT_CATEGORIA,
    categoriaId: id,
})

//TRABAJAR CON FIREBASE
export const addCategoria = categoria => ({
    type: ADD_CATEGORIA,
    categoria,
})

export const removeCategoria = categoriaId => ({
    type: REMOVE_CATEGORIA,
    categoriaId,
})

export const confirmCategoria = () => ({
    type: CONFIRM_CATEGORIA,
    payload,
})

