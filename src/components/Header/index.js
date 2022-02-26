import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
        <li>
          <Link to='/count'>Count</Link>
        </li>
      </nav>
    </div>
  )
}
