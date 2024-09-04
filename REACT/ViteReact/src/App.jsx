// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Todo from "./components/todos"
import Gretting from "./components/greeting"
import Userdetails from "./components/userdetails"
import Productlist from "./components/productlist"
import Productdetails from "./components/productdetails"
import Effectex from "./components/usecase1"
import Customerlist from "./components/customerlist"
import Post from "./components/posts"
import Real from "./components/realclock"
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Userform from "./components/userform"
function App() {
  // const [count, setCount] = useState(0)
  const obj={name:"HAsrg",email:"some@gmail"}
  const handleclick=()=>{
    alert("clicked......!")
  }

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <Router>
    <div>
      <h3>Welcome </h3>

      <Routes>
        <Route path="customerlist" element={<Customerlist />}></Route>
        <Route path="productlist" element={<Productlist />}></Route>
        <Route path="userform" element={<Userform />}></Route>
      </Routes>







      {/* <h3>React App</h3> */}
      {/* <div className="container">
        <Real/> */}
      {/* <Todo />
      <Gretting name="Harsh" message="hello"></Gretting>
      <Gretting name="Harsh" message="hello"></Gretting>
      <Gretting name="Harsh" message="hello"></Gretting>
      <Gretting /> */}
      {/* <Userdetails user={obj} method={handleclick} /> */}
      {/* <Productlist /> */}
     {/* <Effectex />
     <Customerlist /> */}
     {/* <Post />
      </div> */}
    
    </div>
    </Router>
  )
}

export default App
