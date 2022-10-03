import React from 'react'
import Nav from './Nav'
import Adivinanza from './Adivinanza'
import { useState } from 'react'

const Menu = ({user, setUser, adivinanza, setAdivinanza}) => {
    const [adi, setAdi] = useState(false)

    return (
        <>
   <Nav
   user = {user}
   setUser = {setUser}
   adivinanza={adivinanza}
   setAdivinanza = {setAdivinanza}
   />


</>
  )
}

export default Menu