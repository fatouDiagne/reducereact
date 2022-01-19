import AddTask from "./component/Addtask"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListTask from "./component/ListTask";
//import ListTask from "./component/ListTask"
//import { ListTask, ListTaskStore } from "./component/ListTask"
//import { TaskFilter } from "./component/TaskFilter"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AddTask />} />
          <Route path="/listtask" element={ <ListTask/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
