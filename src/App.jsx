import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import Dashboard from './pages/Dashboard';
import UserPage from './pages/UserPage';


function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/inventory' element={<Inventory/>} />
      <Route path='/dashboard' element={<Dashboard/>}  />
      <Route path='/userpage' element={<UserPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
