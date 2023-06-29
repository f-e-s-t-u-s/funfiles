import './App.css';
import Login from './components/Login';
import { Route, Routes} from "react-router-dom"
import Create from './components/Create';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/login' element={ <Login></Login>} ></Route>
      <Route path='/create' element={<Create></Create>} ></Route>
     </Routes>
    
    </div>
  );
}

export default App;
