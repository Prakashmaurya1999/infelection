// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { useState } from 'react';
import Data from './Content';
import Log from './Login';
import LoginSignup from './Components/LoginSignup/LoginSignup';

// import Card from './Card'

function App() {
  return (

    <div style={{padding:"50px"}}>
      {/* <Log /> */}
      <LoginSignup/>
    </div>
    // <div>
    //   <div className='cont'>
    //     {Data.map((ele) => <li ><h3>{ele.title}</h3><p>{ele.body}</p></li>)}
    //   </div>
    //   <div>
    //     <log />
    //   </div>
    // </div>
  );
}

export default App;
