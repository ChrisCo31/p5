import React from 'react'
import Layout2 from '../components/Layout2'


class Realisations extends React.Component {
    render () {
        return (
            <Layout2>
                 <div className="container">
                    <h1>Réalisations</h1>
                        <div className="projets p-ouvrir">                           
                                <h2>TRANSFORMER</h2>
                                <h2>PROJET: Migration du parc informatique vers des solutions logicielles libres </h2>
                                <h4> CLIENT: Mairie</h4>    	
                        
                                <h4> ADN: </h4>
                                <p> Concilier les restrictions budgétaires qui donnent une faible 
                                    marge de manoeuvre et de l’autre une approche du digital comme moyen de rendre les services 
                                    aux publics plus efficaces</p>
                                <h4> ENJEUX/CHALLENGE: </h4>
                                <p>Les valeurs de l’open source et du libre rejoignent dans une large mesure celles du 
                                    service public communal : travail communautaire, service de l’intérêt général, transparence 
                                    et juste prix. L’intérêt économique vient comme un bénéfice secondaire de ce choix.</p>
                                <h4>METHODOLOGIE:</h4>
                                <ul>
                                    <li>Audit de faisabilité (compatibilité des applications métier / alternatives, compatibilité matériel)</li>
                                    <li>Conception : planning, coût, compétences</li>
                                    <li>Mise en place d’un accord cadre pour la mise en oeuvre et l’accompagnement</li>
                                    <li>Suivi du déploiement et du programme de formation</li>
                                </ul>                                     
                                <h4> RESULTAT: </h4>
                                <p>Migration de 80% du parc informatique sous Linux Mint en 9 mois</p>      
                        </div>
                        <div className="projets p-anticiper">
                                    <h2>ANTICIPER</h2>
                                    <h2>PROJET: Schéma Directeur du Numérique </h2>
                                    <h4> CLIENT: Communauté d’Agglomération</h4>                          
                                    <h4> ADN: </h4>
                                    <p> Fédérer/optimiser et mettre en commun des services à la population</p>
                                    <h4> ENJEUX/CHALLENGE: </h4>
                                    <p>Vision à 4 ans des projets à mener autour du numérique.</p>
                                    <h4>METHODOLOGIE: </h4>
                                    <ul>
                                        <li>Bilan des précédents schémas directeurs</li>
                                        <li>Axes stratégiques</li>
                                        <li>Interviews besoins métiers</li>
                                        <li>Cartographie applicative (actuelle et cible)</li>
                                        <li>Feuille de route pour atteindre la cible </li>
                                        <li>Chiffrage et ordonnancement des projets</li>
                                    </ul>      
                                    <h4> RESULTAT: </h4>
                                <p>Schéma Directeur et planification des projets retenus</p>      
                        </div>
                        <div className="projets p-adapter">
                                    <h2> ADAPTER</h2>
                                    <h2>PROJET: Audit de conformité RGPD </h2>
                                    <h4> CLIENT: Service Départemental d'Incendie et de Secours</h4>
                                <h4> ADN: </h4>
                                <p> Service d’urgence en contact avec la population et susceptible de recueillir des données sensibles</p>
                                <h4> ENJEUX/CHALLENGE: </h4>
                                <p>Etre en conformité avec la nouvelle loi sur les données personnelles</p>
                                    <h4>METHODOLOGIE: </h4>
                                    <ul>
                                    <li>Définition du périmètre d’application du RGPD au sein du service</li>
                                    <li>Identification des acteurs clés </li>
                                    <li>Evaluation de la conformité </li>
                                    <li>Gestion des données personnelles (collecte, stockage, destruction, etc.)</li>
                                    <li>Rapport d’audit et construction du plan actions</li>
                                    </ul>
                                <h4> RESULTAT: </h4>
                                <p>Rapport d'audit avec préconisations</p>      
                        </div>
                        <div className="projets p-creer">
                                <h2>COMMUNIQUER</h2>
                                <h2>PROJET: Création d'un site pour faire découvrir des ressources sur le web</h2>
                                    <h4> CLIENT: Association Kapsul dont l'objet est de faire découvrir des médias alternatifs 
                                        en ligne et de proposer une plateforme unique pour les découvrir</h4>
                                <h4> ADN: </h4>
                                <p> Site avec fonctionnalités multiples et developpement continu sur le long terme</p>
                                <h4> ENJEUX/CHALLENGE: </h4>
                                <ul>Deux phases: 
                                    <li>Structure pour recueillir et afficher les ressources</li>
                                    <li>Espace personnel pour chaque internaute inscrit</li>
                                </ul>
                                
                                    <h4>METHODOLOGIE:</h4>
                                    <ul>
                                    <li>Réunion de cadrage de la mission : enjeux, organisation, planning</li>
                                    <li>Elaboration du cahier des charges fonctionnel et technique</li>
                                    <li>Développement du site</li>
                                    <li>Présentation de la maquette au client</li>
                                    <li>Tests et Ajustement </li>
                                    <li>Déploiement et suivi</li>
                                </ul>

                                <h4> RESULTAT:</h4>
                                <ul>
                                    <li>Phase 1 : en cours d'achevement</li>
                                    <li>Phase 2 : deuxieme semestre 2019</li>
                                </ul>
                        </div>
                  </div>
           
                  
            </Layout2>
            
        )
    }
}
export default Realisations