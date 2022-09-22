import React from 'react'

const Formu = ({ingresoN, setIngresoN, bd, setBd, nav, setNav}) => {

setBd = {
  "perfiles":[
    {  
        "nombre": "Pepe",
        "usuarios": "01",
        "password": "10"
    },
    {
        "nombre": "Juan",
        "password": "02",
        "usuarios": "03"
    }
]
}

var array1 = [5, 01, 8, 130, 44];



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se previno el default")

    var found = bd.find(function (element) {
      return element = ingresoN;
    })
    console.log(found)

  }
const handleBuscar = (e) => {
  var found = array1.find(function (element) {
    return element = ingresoN;
  })
  console.log(found)
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
        <input type="text" />
        <input type="checkbox" name="" id="" /><br />

        <input type="submit" value="Iniciar Sesión" />
        </form>
    </div>
    </>
  )
}

export default Formu