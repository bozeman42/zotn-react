import React from 'react';
import './Footer.css'
import ScanIndicator from '../ScanIndicator/ScanIndicator';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        A footer.
      <ScanIndicator />
      </div>
    </footer>
  )
}