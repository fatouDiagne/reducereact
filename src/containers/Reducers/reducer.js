import { ADD_TASK, REMOVE_TASK, RESOLVE_TASK } from "../Actions/constants";


let lastId = 1;
export let initialState = [
    {
        id: lastId,
        description: "bonjour",
        isDone: false
    }
]

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK :
            
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    isDone: false
                }
            ]; 
            
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        
        case RESOLVE_TASK:
            return state.map(task => task.id !== action.payload.id ? task : { ...task, isDone: true } );
            
        default:
            return state
    }
}