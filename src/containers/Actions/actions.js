import { ADD_TASK, REMOVE_TASK, RESOLVE_TASK } from "./constants";

//function to add task in the store 
//we return a object so on l'envelope witch () 
export const TaskAdd = description => ({
    
    type: ADD_TASK,
    payload: {
        description: description,
        isDone: false
    }

});

export const RemovedTask = id => ({
    
    type: REMOVE_TASK,
    payload: {
        id: id
    }
    
});

export const ResolveTask = id => ({

    type: RESOLVE_TASK,
    payload: {
        id: id
    }
})