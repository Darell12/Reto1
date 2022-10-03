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
/*     do{

    
     swal({
         title: 'Adivinanza',
        text:"Escoga un numero entre 0 y 0",
       content: "input",
        button: {
       text: "Probar suerte!",
           closeModal: false,
        },
     })
   .then(num => {

if (Number(num)>aleatorio && Number(num)<=10) {
     setCount(count+1)
     return swal("Te pasaste", {
         buttons : "Salir",
         catch: {
             text :"Reintentar",
             value:"reset",       }
     })
 } else if (Number(num)<aleatorio && Number(num)>0) {
   setCount(count+1)
    return swal("Estas por debajo")
} else if (Number(num)>10 || Number(num)<0) {
    setCount(count+1)
    return swal("Fuera de rango")
} else if (Number(num)===aleatorio) {
    setCount(count+1)
    validacion=true;
     return swal("Adivinaste con " +count+ " intentos")
}

       })} while (validacion=false)
 */
}

    return (

// <div>

//       <header className='navbar'>
//         <div className="logo">
//           <h1>ICR. CORP</h1>           
//         </div>
//         <input type="checkbox" id="nav-toggle" className="nav-toggle" ></input>
//         <label for="nav-toggle" className = "nav-toggle-label"> 
//           <span className="label-span"></span> 
//         </label>
//         <nav> 
//           <ul>
//             <li><a>Home "en trabajo"</a></li>
//             <li><a onClick={handleAdivinanza}>Adivianza</a></li>
//             <li><a onClick={handleCerrarSesion}>Log out</a></li>  
//           </ul>
//         </nav>
//       </header>
//       </div>
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
