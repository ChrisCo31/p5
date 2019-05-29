import React from 'react'
import Menu from "../components/Menu";
import Footer from '../components/Footer';
class rgpd extends React.Component {
    render () {
        return (
       
                  <div id="main">
                       <Menu />
                    <section id="legales" > 
                        
                            <article className="ml">
                                <h1>Synthese graphique de la charte</h1>
                                <h2>Données à caractère personnel : Charte de protection des données à caractere personnel</h2>
                                <p>Prométhée accompagne ses clients dans la définition et la mise en œuvre de strategies digitales 
                                    performantes, pérennes et sécurisées ainsi que dans le respect de la réglementation relative à la 
                                    protection des données à caractère personnel. 
                                    A ce titre, Promethée se doit d’être d’une transparence exemplaire.</p>
                                <p>Nos engagements en matière de protection des données à caractère personnel vont au-delà du simple respect
                                    d’une contrainte réglementaire. Ils procèdent avant tout de notre volonté de travailler avec vous dans une 
                                    relation guidée par le respect et la confiance. Conformément à cette philosophie, la protection des données 
                                    à caractère personnel nous est essentielle.</p>
                                <p>Lorsque vous utilisez les produits, services et sites internet de Prométhée, vous nous confiez vos données à 
                                    caractère personnel. Cette politique de protection des données a été conçue pour vous exposer de manière globale 
                                    les raisons et la manière dont nous collectons et traitons vos données.</p>
                                <p>Afin de simplifier votre lecture de notre charte de protection des données et de vous permettre de voir 
                                    rapidement les données que nous traitons vous concernant, nous vous proposons ci-dessous un tableau synthétique 
                                   et dénuée de jargon juridique.</p>
                                <div id="tableau" > 
                                <table className="table">
                                    <tr>
                                        <th></th>
                                        <th>Candidats</th>
                                        <th>Clients</th>
                                        <th>Prospects</th>
                                        <th>Visiteurs</th>
                                    </tr>
                                    <tr>
                                        <th>Nature des données traitées</th>
                                        <th>Données d'identification et de contact relative à la sphere professionnelle :fonction</th>
                                        <th>Données d'identification et de contact relative à la sphere professionnelle :fonction</th>
                                        <th>Données d'identification et de contact relative à la sphere professionnelle :fonction</th>
                                        <th>Données de connexion (adresses IP), données relatives à la pshere d'audience (statistiques sur les pages Vues,
                                            temps passées)
                                        </th>
                                        
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th>Données  relative à la vie professionnelle :habitude de vie situation familiale</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th>Info d'ordre économique et financier (revenu, situation financiere)</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        
                                    </tr>
                                    <tr>
                                        <th>Types d'utilisations des données</th>
                                        <th>Non commerciale</th>
                                        <th>Commerciale interne : pas de revente</th>
                                        <th>Commerciale interne : pas de revente</th>
                                        <th>Commerciale interne : pas de revente</th>     
                                    </tr>
                                    <tr>
                                        <th>Destinataires des données</th>
                                        <th>Destinataire interne et externe</th>
                                        <th>Destinataire interne et externe</th>
                                        <th>Destinataire interne et externe</th>
                                        <th>Destinataire interne et externe</th>     
                                    </tr>
                                    <tr>
                                        <th>Durée de conservation des données</th>
                                        <th>1 an</th>
                                        <th>Durée de conservation égale à la prescription applicable à compter de la fin de la relation </th>
                                        <th>3 ans</th>
                                        <th>1 an</th>     
                                    </tr>
                                    <tr>
                                        <th>Hebergement des données</th>
                                        <th>Transferts de données Hors EU possibles avec des garanties appropriées</th>
                                        <th>Transferts de données Hors EU possibles avec des garanties appropriées </th>
                                        <th>Transferts de données Hors EU possibles avec des garanties appropriées</th>
                                        <th>Transferts de données Hors EU possibles avec des garanties appropriées</th>     
                                    </tr>
                                </table>
                                </div> 
                           </article>
                        
                    </section>
                    <Footer />
                  </div>
               
            
        )
    }
}
export default rgpd

