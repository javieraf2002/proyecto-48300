import { ADD_NOTA, LOAD_NOTAS } from '../actions/notas.action'
import Nota from '../../Modelos/Nota'

const initialState = {
    notas: []
}

const notasReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NOTA:
            const newNota = new Nota(action.payload.id.toString(), action.payload.titulo, action.payload.nota, action.payload.image)
            return {
                ...state,
                notas: state.notas.concat(newNota)
            }
        case LOAD_NOTAS:
            return {
                ...state,
                notas: action.payload.notas.map(nt => new Nota(nt.id.toString(), nt.titulo, nt.nota, nt.image))
            }
        default:
            return state
    }
}

export default notasReducer;