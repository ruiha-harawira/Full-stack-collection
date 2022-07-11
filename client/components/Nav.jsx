import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {

  return (
    <nav>
    
      <ul>
      
      <Link to='/'>All Movies </Link>
      <Link to='/add'>Add New</Link>
      
      </ul>

    </nav>
)
}

export default Nav