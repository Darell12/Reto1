import React from 'react'

const Formu = ({ingresoN, setIngresoN, bd, setBd, nav, setNav}) => {

let usuario = "45";
let pass = "54"


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se previno el default")
  }
const handleBuscar = (e) => {

}

  return (
    <>
    <div className="contenedor-form">
    <h1>ICR Corp.</h1> 
        <form action="" onSubmit={handleSubmit}>
          <h2>Log In</h2>
        <input type="text" />
        <input type="checkbox" name="" id="" /><br />
          <br />
        <input type="password" />
        <input type="checkbox" name="" id="" /><br />

        <input type="submit" value="Iniciar Sesión" />
        </form>
    </div>
    </>
  )
}

export default Formu