import { connect } from "react-redux"
import { setFilterAction } from "../store/filterAction"
import { filterSelector } from "../store/filterSelector"

export function TaskFilter({value,  onChange }) {
    return <div>
        <button onClick={() => onChange(null)}>Aucun filter </button>
        <button onClick={() => onChange(null)}>Complété</button>
        <button onClick={() => onChange(null)}>A faire </button>
    </div>
}

export const TaskFilterStore = connect (
    state => ({
        value: filterSelector(state)
    }),
    dispatch => ({
        onChange: (value) => dispatch(setFilterAction(value))
    })
)(TaskFilter)