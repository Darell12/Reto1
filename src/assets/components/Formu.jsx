import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';


const Formu = ({ingresoN, setIngresoN, ingresoP, setIngresoP,  check, setCheck, expresion, setExpresion}) => {

let usuario = "45";
let pass = "54"

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se previno el default")
    console.log(ingresoN, ingresoP)
    if (ingresoN.value === usuario && ingresoP.value === pass) {
      //captcha
      setCheck(!check);
      handlecaptcha();
    } else {
      swal({icon: "error",title: "¡Error!", text: "Nombre de usuario o contrseña incorrecta"})
      console.log("Error Intente nuevamente");
      
    }
  }

  const handleChangeN = (e) => {
    setIngresoN({value:e.target.value})
  }

  const handleChangeP = (e) => {
    setIngresoP({value:e.target.value})
  }

  const handlecaptcha = (e) => {
    let termino1 = ingresoN.value.slice(0,1);
    let termino2 = ingresoP.value.slice(0,1);
    setExpresion(termino1+ "+" +termino2)
    console.log(termino1 + "+" + termino2)
    console.log(expresion)    
    console.log("El estado es: " + check)
  }


  return (
    <>
    <div className="contenedor">
    <div className="login-box">
      <h2>Log In</h2>
      <form action="" onSubmit={handleSubmit}>
      <div className='user-box'>

      
        <input type="text" className='input' value={ingresoN.value} onChange={handleChangeN}/>
        <label htmlFor="">Nombre de Usuario:</label>
      </div>
       
      <div className="user-box">

      
        <input type="password" className='input' value={ingresoP.value} onChange={handleChangeP} required=""/>
        <label htmlFor="">Contraseña:</label>
        </div> 

        <input type="submit" value="" className='invisible'/>
        
      <a href="" onClick={handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        submit
      </a>

        </form>
    </div>
    </div>
    </>
  )
}

export default Formu