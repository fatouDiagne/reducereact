import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemovedTask, ResolveTask } from '../containers/Actions/actions';
import store from '../containers/store/index';
import Button from '@mui/material/Button';

const ListTask = () => {
    const tasks = useSelector(state => state)
    const dispatch = useDispatch();
    
    const handleCheck = () => {
        dispatch(ResolveTask(1))
        console.log(store.getState());
    }
    const handleRemove = () => {
         //unsubscribe();
         dispatch(RemovedTask(1))
         
         console.log(store.getState());
     }
    return (
        <div className="wrapper">
            <h1>List Task</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.description} <input type="checkbox" id="checkox" onClick={handleCheck} /> <Button variant="contained" type="submit" onClick={handleRemove}>
                                Remove
                </Button></h3>
                        {task.isDone===false} 
                    </li>
                ))
                
                }
            </ul>
            <div className="buttonstyle">
            </div>
        </div>
    );
};

export default ListTask;