import React from 'react';
import './Footer.css'
import ScanIndicator from '../ScanIndicator/ScanIndicator';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to='/register-player'><button>Register</button></Link>
        <ScanIndicator />
      </div>
    </footer>
  )
}