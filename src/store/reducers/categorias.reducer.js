import { CATEGORIAS } from '../../data/categorias'
import { SELECT_CATEGORIA, ADD_CATEGORIA, REMOVE_CATEGORIA } from '../actions/categorias.action';

//ESTADO INICIAL
const initialState = {
    categorias: CATEGORIAS,
    selected: null,
}

//SE CREA LA FUNSION REDUCTORA
const CategoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORIA:
            const indexCategoria = state.categorias.findIndex(cat => cat.id === action.categoriaId)
            if (indexCategoria === -1) return state
            return {...state, selected: state.categorias[indexCategoria]}
        case ADD_CATEGORIA:

        case REMOVE_CATEGORIA:
            
        default:
            return state;
    }
}

//EXPORTACION
export default CategoriaReducer;

