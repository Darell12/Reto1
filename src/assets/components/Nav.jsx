import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert'
import Adivinanza from './Adivinanza'
import { useNavigation } from "react-router-dom"


const Nav = ({user,setUser,adivinanza, setAdivinanza}) => {

const [count, setCount] = useState(1);
const navigation = useNavigation();
let validacion = false;


const handleCerrarSesion = (e) => {
    setUser(!user)
    swal({icon: "success",title: "¡Sesion Cerrada!", text: "Vualva Pronto"})
    setAdivinanza(false)
   
}

const handleAdivinanza = (e) => {
    let aleatorio = Math.floor(Math.random() * 10);
    console.log(aleatorio);

    setAdivinanza(!adivinanza)
}

    return (

<>


<nav id="nav-2">
  <a class="link-2" href="#">Home(inwork)</a>
  <a class="link-2" onClick={handleAdivinanza}>Adivianza</a>
  <a class="link-2" href="#">Contact</a>
  <a class="link-2" onClick={handleCerrarSesion}>Log out</a>
</nav>


</>

  )
}

export default Nav
