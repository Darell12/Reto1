import React from 'react'
import Nav from './Nav'
import { useState } from 'react'

const Adivinanza = ({}) => {

const [numero, setNumero] = useState("");
const [count, setCount] = useState(1);
const [aleatorio, setAleatorio] = useState(Math.floor(Math.random() * 10))

   

    const handleChangeN = (e) => {
        setNumero({value:e.target.value})
        console.log(aleatorio)
      }

      const handleReiniciar = (e) => {
       setAleatorio((Math.floor(Math.random() * 10)))
       setCount(1)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("se previno el default")
        if (Number(numero.value)>aleatorio && Number(numero.value)<=10) {
            setCount(count+1)
            return swal({icon: "success",title: "Adivinaste!", text: "Tan solo en "+count+ " intentos " })
            
        } else if (Number(numero.value)<aleatorio && Number(numero.value)>0) {
          setCount(count+1)
           return swal("Estas por debajo")
       } else if (Number(numero.value)>10 || Number(numero.value)<0) {
           setCount(count+1)
           return swal("Fuera de rango")
       } else if (Number(numero.value)===aleatorio) {
           setCount(count+1)
            return swal("Adivinaste con " +count+ " intentos")
       }
      }
  return (
    <div>
     
     <div className="login-box">  
        <form action="" onSubmit={handleSubmit}>

        <h2>Adivinanza</h2>
        <label htmlFor="">Ingrese un numero entre 0 y 10</label>
        <div className="user-box">
        <input type="text" className='input' value={numero.value} onChange={handleChangeN}/>
        </div>
        <a href="" onClick={handleReiniciar}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Nuevo Numero//Nuevo Contador
      </a>
      <a href="" onClick={handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Intentar
      </a>
        </form>
    </div> 
    </div>
  )
}

export default Adivinanza