import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <h2>Sunsets in Taiwan</h2>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/locations">Locations </Link>
      </div>
    </nav>
  )
}
