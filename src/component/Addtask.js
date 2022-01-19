import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { RemovedTask, TaskAdd } from '../containers/Actions/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import store from '../containers/store/index';

/*const mapDispatchToPros = dispatch => {
    return {
        addedTask : description => dispatch(TaskAdd(description))
    }
}*/
 const AddTask = (props) => {
     const [description, setDescription] = useState("");
     const dispatch = useDispatch();
     const navigate = useNavigate();
     /*const unsubscribe =  store.subscribe(() => {
        console.log("Store changed!", store.getState())
        })*/
     
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(TaskAdd(description))
        setDescription('');
        navigate('/listtask');
        console.log(store.getState());
     }
     const handleRemove = () => {
         //unsubscribe();
         dispatch(RemovedTask(1))
         
         console.log(store.getState());
     }
     //const task = useSelector(state => state)

     return (
        <>
        <div className="container">
            <form>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch', marginTop:'50px', padding:'10px' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <div className="textStyle">
                            <h2>Description</h2>
                        </div>
                        <div>
                            <TextField
                            required
                            id="outlined-required"
                            label="Description"
                            name={description}
                                        defaultValue="description"
                                        type="text"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                        
                            />
                        </div>
                        <Button variant="contained" type="submit" onClick={handleSubmit}>
                            Ajouter
                        </Button>
                    </div>
                </Box>
            </form>
            <br/><br/>
            
             </div>
             </>
    );
};

export default AddTask;
//xport default connect(null, mapDispatchToPros)(AddTask)