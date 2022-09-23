import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formu from './assets/components/Formu'

function App() {
  const [ingresoP, setIngresoP] = useState("")
  const [ingresoN, setIngresoN] = useState("");
  const [bd, setBd] = useState("");
  const [nav, setNav] = useState("");



  return (
    <div className="App">

    
    <Formu
    ingresoN ={ingresoN}
    setIngresoN ={setIngresoN}
    bd ={bd}
    setBd ={setBd}
    nav = {nav}
    setNav = {setNav}
    setIngresoP = {setIngresoP}
    ingresoP = {ingresoP}
    />
    </div>

  )
}

export default App
