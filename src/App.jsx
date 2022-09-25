import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formu from './assets/components/Formu'
import Catpcha from './assets/components/Catpcha'

function App() {
  const [ingresoP, setIngresoP] = useState("")
  const [ingresoN, setIngresoN] = useState("");
  const [bd, setBd] = useState("");
  const [nav, setNav] = useState("");
  const [check, setCheck] = useState(false)
  const [expresion, setExpresion] = useState("")


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
    check = {check}
    setCheck = {setCheck}
    expresion = {expresion}
    setExpresion = {setExpresion}
    />

<div className='contenedor-catpcha'>
  {check?
    <Catpcha
    expresion = {expresion}
    setExpresion = {setExpresion}
    check = {check}
    setCheck = {setCheck}
    />: ""
  }
</div>
    </div>

  )
}

export default App
