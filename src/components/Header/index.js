import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <Nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
      </Nav>
    </div>
  )
}
