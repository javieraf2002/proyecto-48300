import { TAREAS } from '../../data/tareas'
import { SELECT_TAREA, FILTER_TAREAS, FILTER_REALIZADAS } from '../actions/tareas.action';

//ESTADO INICIAL
const initialState = {
    tareas: TAREAS,
    filtroTareas: [],
    tareasFinalizadas: [],
    selected: null,
}

//SE CREA LA FUNSION REDUCTORA
const TareasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAREA:
            return {
                ...state, selected: state.tareas.find(tarea => tarea.id === action.tareaId)
            }
        case FILTER_TAREAS:
            return {
                ...state, filtroTareas: state.tareas.filter(tarea => tarea.categoria == action.categoriaId)
            }
        case FILTER_REALIZADAS:
            return {
                ...state, tareasFinalizadas : state.tareas.filter(tarea => tarea.estado == action.estado)
            }
        default:
            return state
    }
}

//EXPORTACION
export default TareasReducer;