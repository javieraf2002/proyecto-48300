export const SELECT_TAREA = 'SELECT_TAREA'
export const FILTER_TAREAS = 'FILTER_TAREAS' //FILTRAR POR CATEGORIA 
export const FILTER_REALIZADAS = 'FILTER_REALIZADAS' //FILTRAR TAREAS FINALIZADAS

export const selectTarea = (id) => ({
    type: SELECT_TAREA,
    tareaId: id,
})

export const filterTareas = (id) => ({
    type: FILTER_TAREAS,
    categoriaId: id 
})

export const filterRealizadas = (id) => ({
    type: FILTER_REALIZADAS,
    estado: id 
})