// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Data from './Content';
// import Card from './Card'

function App() {


  return (
    <div className='cont'>
      {Data.map((ele) => <li ><h3>{ele.title}</h3><p>{ele.body}</p></li>)}
    </div>

  );
}

export default App;
