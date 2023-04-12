import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoriaReducer from "./reducers/categorias.reducer";
import TareasReducer from "./reducers/tareas.reducer";

//COMBINAR LAS DOS FUSIONES REDUCTORAS EN UN OBJETOa

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    tareas: TareasReducer,
})

//EXPORTACION PARA PODER APLICARLOS
export default createStore(RootReducer, applyMiddleware(thunk));

