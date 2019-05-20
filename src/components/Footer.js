import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="footerPrez">
        <h3>Prométhée</h3>
        <p> Agence digitale centrée sur le développement social équitable</p>      
        </div><br />
        <div className="footerComp">
            <ul className="icons">
                <a href="https://twitter.com/ChristelCoeur" className="fab fa-twitter"><span className="label"></span></a>
                <a href="https://github.com/ChrisCo31" className="fab fa-github"><span className="label"></span></a>
                <a href="https://www.linkedin.com/in/christel-coeur-developpement/" className="fab fa-linkedin"><span className="label"></span></a>
            </ul>      
        </div><br />
        <div className="infosPrat">
        <p>Ouvert du lundi au vendredi</p>
        <p>De 9h à 18h</p><br />

        <p>Telephone : 09.42.42.42.42</p>
        <p>Mail: Contact@Promethee.com</p>

        </div>
        <div className="copyright">
            <li>Dev: <a href="http://christelcoeur.fr/">Chrisco</a></li>
        </div>
    </footer>
)

export default Footer