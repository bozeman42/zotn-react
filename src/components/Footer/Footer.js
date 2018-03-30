import React from 'react';
import './Footer.css'
import ScanIndicator from '../ScanIndicator/ScanIndicator';

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        A footer.
      <ScanIndicator scanner={props.scanner}/>
      </div>
    </footer>
  )
}