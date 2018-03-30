import React from 'react';
import './Header.css';
import '../../assets/fonts/Creepster/Creepster-Regular.ttf'
import '../../assets/fonts/Alfa_Slab_One/AlfaSlabOne-Regular.ttf';

export default function Header() {
  return (
    <header>
      <div id="zombie-text">
        <span className="creeper-font larger-text">
          ZOMBIES
        </span>
      </div>
      <div>
        <span className="header-font smaller-text">
          OF
          <br />
          THE
          </span>
      </div>
      <div>
        <span className="header-font larger-text">North</span>
      </div>

    </header>
  )
}