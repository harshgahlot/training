import logo from './logo.svg';
import './App.css';
import BasicExample from './components/header';
import Main from './components/main';
import Slider from './components/slider';
import Products from './components/product';
import Statedemo from './components/statedemo';
import Counter from './components/counter';
import { useState } from 'react';
import Login from './components/login';
import Register from './components/register';

function App() {
  // const [flag,setFlag]=useState(true);
  const [name,setName]=useState('Register');
  const changename=()=>{
    setName(name=='Register'?'Login':'Register')
}
  return (
    <div className="App">
      <BasicExample />
      <Slider />
      <Main />
      <Products />
      <Statedemo />
      <Counter />
      {
        name=='Register'?<Login />:<Register />
      }
      <button onClick={changename}>{name}</button>
      {/* <header className="App-header">
        <img src="https://www.pngmart.com/files/15/Aesthetic-Artwork-PNG-Free-Download.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
