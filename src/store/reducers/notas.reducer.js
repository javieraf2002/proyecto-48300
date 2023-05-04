import { ADD_NOTA } from '../actions/notas.action'
import Nota from '../../Modelos/Nota'

const initialState = {
    notas: []
}

const notasReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NOTA:
            const newNota = new Nota(Date.now(), action.payload.titulo, action.payload.nota, action.payload.image)
            console.log(newNota);
            return {
                ...state,
                notas: state.notas.concat(newNota)
            }
        default:
            return state
    }
}

export default notasReducer;