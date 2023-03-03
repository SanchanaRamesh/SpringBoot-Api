import './App.css';
import './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.js';
import Signup from './Signup';
import Home from './Home';
import Add from './Add';
import Update from './Update';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<Add />}></Route>
    <Route path="/update" element ={<Update />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;