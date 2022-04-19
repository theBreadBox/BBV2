import logo from '../img/BBV2_LOGO.png';
import React, {Component} from 'react';
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
      <a href="#">
        <img src={"./img/BBV2_LOGO.png"} alt="logo"/>
        </a>
        <div className='navbar'>

          <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://discord.gg/n5XQrMBy"><span className="fab fa-discord"></span></a>
                   
                        <a className="nav-link px-2" href="https://twitter.com/budbuddiesNFT"><span className="fab fa-twitter"></span></a>
                    
                        <a className="nav-link px-2" href="https://opensea.io/collection/budbuddiesV2"><span className="fa fa-ship"></span></a>
                    </li>
                </ul>
                   </div>

        
      </div>
    </nav>
  )
}