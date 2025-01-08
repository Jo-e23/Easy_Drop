
import './App.css'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  
  return (
    <>
    <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
     <Route path='/Login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
       
    
    </>
  )
}

export default App;
