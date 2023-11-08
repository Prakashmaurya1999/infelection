// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Card from './Card'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  // const [count, setCount] = useState(0);

  // function increase() {
  //   setCount(count + 1);
  // }
  // function decrease() {
  //   if (count <= 0) {
  //     alert("nunmber is not zero ");
  //     return;
  //   }
  //   setCount(count - 1)


  return (
    <div className='bg'>
      {/* <div>
        <button onClick={() => { setIsOpen(true) }} >open model</button>
        {isOpen && (
          <div className='pop'>
            <div>
              <button onClick={() => { setIsOpen(false) }}>no</button>
              <button onClick={() => { setIsOpen(false) }}>yes</button>
            </div>
          </div>

        )}
      </div> */}

      <div>
        <button onClick={() => { setIsOpen(true) }}>open</button>
        {isOpen && (
          <div className='pop'>
            <div>
              <button onClick={() => { setIsOpen(false) }} >no</button>
              <button onClick={() => { setIsOpen(false) }} yes>yes</button>
            </div>
          </div>


        )}
      </div>


      {/* <h2>{count}</h2> */}
      {/* <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg" />
      <Card txt="I am hacker" desc="ghfghfghfgh"></Card>
      <Card txt="jai shree ram"></Card> */}
      {/* <button onClick={increase} className='btn'>increas</button>
      <button onClick={decrease}>decreses</button> */}

      {/* <main className='bg'>
        <div>
          <button onClick={() => { setIsShow(!isShow); }}>
            {isShow ? 'hideme' : 'showme'}
          </button>
          {isShow && (
            <div>
              <p>hello i am availble</p>
            </div>
          )}
        </div>

      </main> */}
    </div>
  );
}

export default App;
