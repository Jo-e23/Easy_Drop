import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter,Outlet,Route,Routes } from 'react-router';
import Layout from './Components/Layout';
import About from './Components/About';
import Home from './Components/Home';
import Aboutlayout from './Components/Aboutlayout'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<Aboutlayout/>}>
    <Route index='/' element={<Landing/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    

    </Route>
     <Route path='/' element={<Layout/>}>
    <Route index='/' element={<Landing/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    <Route path='/home' element={<Home/>}></Route>

    </Route>
   </Routes>
   </BrowserRouter>
    
   
  )
}

export default App
