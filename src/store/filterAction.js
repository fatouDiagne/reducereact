import { UPDATE_FILTER } from "./FilterTask";

export const setFilterAction = (value) => ({
    type: UPDATE_FILTER,
    payload: value
})