import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to='/'>
      <header>
        <div className="zombie-font larger-text">
          <span>ZOMBIES</span>
        </div>
        <div className="header-font stacked-text">
          OF<br />THE
        </div>
        <div className="header-font larger-text">
          NORTH
        </div>
      </header>
    </Link>
  )
}