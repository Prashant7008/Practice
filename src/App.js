import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import BasicFrom from './login';
import Home from './Home';


function App() {
  return (
    
    <BrowserRouter>
    <div className='app'>
    
    <Routes>
      <Route path='/' element={<BasicFrom/>}/>
      <Route path='/home'  element={<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;
