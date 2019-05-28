import React from "react";


import Logo from '../assets/pictures/logo.png'

const Banner = () => (
  <section id="banner">
    
    <div className="banner" id="head">
        <div className="logo">                   
          <img
          src={Logo} 
          alt="Logo Prométhée"
          />                                 
        </div><br />
        <header className="title">
            <h1>Prométhée</h1>
            <h3>Votre partenaire digital</h3>
        </header>
        <div className="content">
                <h3>Agence digitale ESS, fondée sur la collaboration, le conseil et la formation.</h3>
        </div>
       
    </div>
  </section>
);

export default Banner;

