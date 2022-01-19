import { UPDATE_TASK_ACTION } from "./todoReducer";

export const toggleTaskAction = (todo) => ({
    type: UPDATE_TASK_ACTION,
    payload: {...todo, isDone: !todo.isDone}
})