import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoriaReducer from "./reducers/categorias.reducer";
import TareasReducer from "./reducers/tareas.reducer";
import authReducer from "./reducers/auth.reducer";

//COMBINAR LAS DOS FUSIONES REDUCTORAS EN UN OBJETOa

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    tareas: TareasReducer,
    auth: authReducer,
})

//EXPORTACIÓN PARA PODER APLICARLOS
export default createStore(RootReducer, applyMiddleware(thunk));

