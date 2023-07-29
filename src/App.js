import React from 'react';
import './App.css';
import Login from './component/Login';
import Profile from './component/Profile';
import { Route,Routes } from 'react-router-dom';
function App() {


  
  return (
    <div className="App">
      <Routes>
     <Route path='' element={<Login />}/>
    <Route path='/Profile'  element={ <Profile  />} />
      </Routes>
    
    </div>
  );
}

export default App;
