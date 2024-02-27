
import React,{useRef} from 'react';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

import Header from './components/UI/Header/Header';

import About from "../src/components/Pages/About/About";

import Adress from "../src/components/Pages/Adress/Adress";

import Meals from "../src/components/Pages/Meals/Meals";

const App = () => {
  const myRef = useRef(null);
  return (
    
    <Router>
  

 <Header/>
  
     <Routes>

     <Route path='/meals' element={<Meals/>} />

     <Route path='/about' element={<About/>} />
    
     <Route path='/adress' element={<Adress/>} />

    
     </Routes>

     </Router>

  
  )
}

export default App









