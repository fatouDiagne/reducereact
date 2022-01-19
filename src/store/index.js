import { combineReducers, createStore } from "redux";
import { filterTask } from "./FilterTask";
import { TodoReducer } from "./todoReducer";




export default createStore(
  
  combineReducers({
    todos: TodoReducer,
    filter: filterTask
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

