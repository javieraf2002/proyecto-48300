import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoriaReducer from "./reducers/categorias.reducer";
import TareasReducer from "./reducers/tareas.reducer";
import authReducer from "./reducers/auth.reducer";
import NotasReducer from "./reducers/notas.reducer";

//COMBINAR LAS DOS FUSIONES REDUCTORAS EN UN OBJETO

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    tareas: TareasReducer,
    auth: authReducer,
    notas: NotasReducer,
})

//EXPORTACIÓN PARA PODER APLICARLOS
export default createStore(RootReducer, applyMiddleware(thunk));

