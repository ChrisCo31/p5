import React from 'react'
import { Link } from 'gatsby'


const Menu = (props) => (
    <div className="menu">
            <div className="side-menu">
            <h3>Prométhée</h3>
                <p>Agence digitale ESS</p>
                <ul>
                    <li id='es'><Link to="/ess"><i>ESS ?</i></Link></li>
                    <div className="bordermenu"></div>
                    <li id='services'><Link to="/prestations"><i>Prestations</i></Link></li>
                    <div className="bordermenu"></div>
                    <li id='projets'><Link to="/realisations"><i>Réalisations</i></Link></li>
                    <div className="bordermenu"></div>
                    <li id='partenariats'><Link to="/partenariat"><i>Partenariats</i></Link></li>
                    <div className="bordermenu"></div>
                    <li id='equipe'><Link to="/equipe"><i>Equipe</i></Link></li>
                    <div className="bordermenu"></div>
                    <li id='blog'><Link to="/IndexBlog"><i>Blog</i></Link></li>
                    <div className="bordermenu"></div>
                </ul>
            </div>
    </div>
);
export default Menu;
