import React from 'react'
import Layout2 from '../components/Layout2'
import Contact from '../components/Contact'



class Prestations extends React.Component {
    render () {
        return (
            <Layout2>
       <div className="prestations">
                    <div id="conseil">
                    <h2>Conseil</h2>
                    <ul>
                        <li><strong> Définir votre Stratégie Numérique </strong> </li>
                            <ul>
                                <li>Audit et évaluation de vos services numériques</li>
                                <li>Formalisation de la stratégie </li>
                                <li>Préconisations, définition des projets, chiffrage et ordonnancement</li>
                            </ul>
                        <li><strong> Référent Digital externalisé </strong> </li>
                            <ul>
                                <li>Interlocuteur privilégié entre vos équipes métiers et vos partenaires technologiques</li>
                                <li>Conseil et accompagnement dans vos choix technologiques sur site ou dans le Cloud </li>
                                <li>Sensibilisation aux solutions numériques</li>
                            </ul>
                        <li><strong> Accompagnement dans vos appels d'offres </strong> </li>
                            <ul>
                                <li>Interviews des référents métiers </li>
                                <li>Rédaction de cahier des charges et consultation</li>
                                <li>Analyse des offres et choix des prestataires</li>
                                <li>Pilotage de la mise en oeuvre </li>
                            </ul>
                    </ul>
                    </div>
                    <div id="formation">
                    <h2>Formations</h2>
                    <ul>
                        <li><strong> Devenir le Délégué à la Protection des Données de votre organisation </strong> </li>
                            <ul>
                                <li>Règlementation RGPD et Référent CNIL</li>
                                <li>Identifier les données personnelles et les traitements associés</li>
                                <li>Animer des ateliers avec les responsables de traitements</li>
                            </ul>
                        <li><strong> Intégrer la Sécurité dans vos projets </strong> </li>
                            <ul>
                                <li>Identification vs Authentification vs Autorisation</li>
                                <li>Les bons réflexes à adopter sur internet</li>
                                <li>Les solutions de paiement en ligne</li>
                            </ul>
                        <li><strong> Comprendre l'environnement web </strong> </li>
                            <ul>
                            <li>Les enjeux de la présence en ligne</li>
                            <li>Quelles questions se poser avant de se lancer dans la création de son site</li>
                            <li>Nom de domaine, hébergement et plateformes</li>
                            </ul>
                    </ul>
                    </div>
                    <div id="developpement">
                    <h2>Conception / Réalisation d'applications web</h2>
                    <ul>
                        <li>Site vitrine, site e-commerce, site institutionnel</li>
                        <li>Implémentation API</li>
                        <li>Fonctionnalités (tunnel d'achat, billetterie)</li>
                        <li>Outils de veille</li>
                        <li>Moteur de recherche</li>
                        <li>Refonte de site</li>                                    
                    </ul>
                    </div>           
                    <div id="marketing">
                    <h2>Marketing</h2>
                    <ul>
                        <li><strong> Améliorer la présence de l’entreprise sur le web </strong> </li>
                            <ul>
                                <li>Site internet vs réseaux sociaux</li>
                                <li>Ajout de contenu</li>
                                <li>Stratégie Marketing</li>
                            </ul>
                        <li><strong> Promouvoir l’entreprise avec l’e-marketing </strong> </li>
                            <ul>
                                <li>Communication digitale</li>
                                <li>Marketing operationnel</li>
                            </ul>
                      
                    </ul>
                    </div>                 
                    <div id="design">
                    <h2>Design</h2>
                    <ul>
                        <li>Logo & identité</li>
                        <li>Web & app design</li>
                        <li>Kit e-mailing</li>
                        <li>Habillages de comptes médias sociaux</li>                                   
                    </ul>
                    </div>
                 
    </div>
    <div id="contact">
        <article id="box_contact">
            <Contact />
        </article>
    </div>
            </Layout2>
            
        )
    }
}
export default Prestations
