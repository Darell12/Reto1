import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formu from './assets/components/Formu'

function App() {
  const [count, setCount] = useState(0)
  const [ingresoN, setIngresoN] = useState("");
  const [bd, setBd] = useState("");
  const [nav, setNav] = useState("");



  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    
    <Formu
    ingresoN ={ingresoN}
    setIngresoN ={setIngresoN}
    bd ={bd}
    setBd ={setBd}
    nav = {nav}
    setNav = {setNav}
    />
    </div>

  )
}

export default App
