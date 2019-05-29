import React from "react";

import Logo from '../assets/pictures/logoHeader.png'
const Banner2 = () => (
  <section id="banner2">
    <div className="banner2">
    <div className="logo">                   
          <img
          src={Logo} 
          alt="Logo Prométhée"
          />                                 
        </div><br />
        <header className="title">
            <h1>Prométhée</h1>
            <div className="border"></div>
        </header>
        <div className="content">
                <h3>Agence digitale ESS, fondée sur la collaboration, le conseil et la formation.</h3>
        </div>
    </div>
  </section>
);

export default Banner2;
