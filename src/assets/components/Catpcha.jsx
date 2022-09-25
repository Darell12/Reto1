import React from 'react'
import swal from 'sweetalert';

const Catpcha = ({expresion, setExpresion, check, setCheck}) => {
 
    let respuesta = eval(expresion);
    let ingreso = 0;

    console.log("expresion :" + expresion + "resultado :" + respuesta )

    const handleValidar = (e) => {
        e.preventDefault();
        console.log("valido")
        console.log(ingreso.value)
        console.log(respuesta)
        if (Number(ingreso.value) === respuesta){
            console.log("inicio correcto")
            setCheck(!check)
            swal({icon: "success",title: "¡Inicio de Sesión Exitoso!"})
        } else {
            
        }
    }

    const handleChange = (e) => {
        ingreso = ({value:e.target.value})
    }
    return (
    <>
    <div className='login-box'>
    <h2>Catpcha </h2>

    <form action="" onSubmit={handleValidar}>
        <label htmlFor="">Digite el resultado de la siguiente: {expresion}</label>
        <input type="number" onChange={handleChange}/>
        <input type="submit" value="submit" />
    </form>

    </div>
    </>
  )
}

export default Catpcha