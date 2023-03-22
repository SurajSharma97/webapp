import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


function Header() {
  return (
    <div className='head'>
            <h1>
                TechFinder
            </h1>


         <main>
        <HashLink to={"/#Home"} >Home</HashLink>
        <HashLink to={"/#Home2"} >Skills</HashLink>
        <HashLink to={"/#about"} > About</HashLink>
        <HashLink to={"/#brands"} > Brands</HashLink>
        <Link to={"/Contact"}>Contact</Link>
         </main>

    </div>
  )
}

export default Header