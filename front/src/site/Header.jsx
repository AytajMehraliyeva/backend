import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to={"login"}>Login</Link>
        <Link to={"register"}>Register</Link>
        
        </div>
  )
}

export default Header