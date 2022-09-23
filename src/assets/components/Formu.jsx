import React from 'react'

const Formu = ({ingresoN, setIngresoN, bd, setBd, nav, setNav, ingresoP, setIngresoP}) => {

let usuario = "45";
let pass = "54"


const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se previno el default")
    console.log(ingresoN, ingresoP)
    if (ingresoN.value === usuario && ingresoP.value === pass) {
      //captcha
      console.log("Sesión iniciada")
    } else {
      console.log("Error Intente nuevamente")
    }
  }

  const handleChangeN = (e) => {
    setIngresoN({value:e.target.value})
  }

  const handleChangeP = (e) => {
    setIngresoP({value:e.target.value})
  }

  const handlecaptcha = (e) => {

  }

  return (
    <>
     <h1>ICR Corp.</h1> <br />
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
        
      <a href="" onClick={handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        submit
      </a>

        </form>
    </div>
    </>
  )
}

export default Formu