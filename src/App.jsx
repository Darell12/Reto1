import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formu from './assets/components/Formu'
import Catpcha from './assets/components/Catpcha'
import Menu from './assets/components/Menu'
import Nav from './assets/components/Nav'
import Adivinanza from './assets/components/Adivinanza'

function App() {
  const [ingresoP, setIngresoP] = useState("")
  const [ingresoN, setIngresoN] = useState("");
  const [bd, setBd] = useState("");
  const [nav, setNav] = useState("");
  const [check, setCheck] = useState(false)
  const [expresion, setExpresion] = useState("")
  const [user, setUser] = useState(true)
  const [adivinanza, setAdivinanza] = useState(false);


  return (
    <div className="App">


    {user?
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
    user = {user}
    setUser = {setUser}
    />: <Menu
    user = {user}
    setUser = {setUser}
    adivinanza = {adivinanza}
    setAdivinanza = {setAdivinanza}
    />}

   {adivinanza? <Adivinanza/
   >: ""}

<div className='contenedor-catpcha'>
  {check?
    <Catpcha
    expresion = {expresion}
    setExpresion = {setExpresion}
    check = {check}
    setCheck = {setCheck}
    user = {user}
    setUser = {setUser}
    />: ""
  }
</div>
    </div>

  )
}

export default App
