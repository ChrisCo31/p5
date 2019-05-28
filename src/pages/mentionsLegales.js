import React from 'react'
import Menu from "../components/Menu";
import Footer from '../components/Footer';
import { Link } from 'gatsby'
class mentionLegales extends React.Component {
    render () {
        return (
       
            
                  <div id="main">
                       <Menu />
                    <section id="legales" > 
                        
                            <article className="ml">
                            <h1>Mentions legales</h1>
                            <h2>Gestion du site</h2> 
                            <p> Responsable de la publication : Christel Coeur, christel.coeur@promethee.com, Directrice associé Prométhée</p>
                            <p> 42 avenue des Limousines, 87 000 Limoges</p>
                            <p> SCOP au capital de 18 000 euros</p>
                            <p> RCS Limoges 490602121</p>

                            <h2> Hebergement</h2>
                            <p>hebergement : netlify</p>
                            <p> Maitrise d'ouvrage et réalisation du site Internet : Agence Pormethée</p>

                            <h2> Propriété intellectuelle</h2>
                            <p>Les contenus de ce site (structure, design, texte, image, animation, logo) sont la propriété exclusive 
                                de leurs auteurs respectifs. Toute représentation totale ou partielle de ce site est soumise à 
                                l’autorisation préalable, écrite et expresse du comité de rédaction.</p>

                            <h2>Photographies</h2>
                            <p>Les photographies utilisées sur ce site sont libres de droits et utilisées comme souhaité</p>

                            <h2>Création de liens vers le site</h2>
                            <p>Le site permet, sans autorisation préalable, la mise en place de liens hypertextes pointant vers ses pages, sous réserve :</p>
                            <p>Que le lien pointant vers une page du site SRC Solution soit accessible par l’ouverture d’une nouvelle fenêtre / onglet,</p>
                            <p> De mentionner explicitement la source qui pointera directement sur le contenu visé.</p>
                            <p>Les sites utilisant des liens hypertextes pointant vers une page du site Promethée doivent le faire 
                               sans porter atteinte à l’image du site et dans le respect des lois relatives à la propriété intellectuelle,
                                à l’informatique et aux libertés.</p>

                                <h2>Limitation de responsabilité</h2>
                                <p>Nous attachons une grande importance à proposer des liens vers des contenus issus de sources officielles. 
                                    Cependant Promethee ne saurait être tenu pour responsable des erreurs rencontrées sur le site, problèmes techniques, 
                                    interprétation des informations publiées et conséquences de leur utilisation. 
                                    En conséquence, l’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>

                                <h2>Données à caractère personnel</h2>
                                <p>Consultez notre <Link to="/rgpd"><i>Charte RGPD</i></Link></p>

                               
                                    </article>

                                
                    </section>
                    <Footer />
                  </div>
               
            
        )
    }
}
export default mentionLegales

