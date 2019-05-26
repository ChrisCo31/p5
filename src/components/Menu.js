import React from 'react'
import { Link } from 'gatsby'


const Menu = (props) => (
    <div className="menu">
    
            <div className="side-menu">              
            <div className="term">
                <p className="fas fa-bars fa-lg"></p>
            </div>
            <h3><Link to="/">Prométhée</Link></h3>
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
                <p id='mention'><Link to="/mentionsLegales"><i>Mention Legales</i></Link></p>
                <div className="reseauxsoc">
                    <ul className="icons">
                        <a href="https://twitter.com/ChristelCoeur" className="fab fa-twitter fa-xs"><span className="label"></span></a>
                        <a href="https://github.com/ChrisCo31" className="fab fa-facebook fa-xs"><span className="label"></span></a>
                        <a href="https://www.linkedin.com/in/christel-coeur-developpement/ " className="fab fa-linkedin fa-xs"><span className="label"></span></a>
                    </ul>      
        </div><br />
            </div>
    </div>
);
export default Menu;
