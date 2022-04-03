import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import './App.css';

const App = () => {
  return(
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
