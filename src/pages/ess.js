import React from 'react'
import Layout2 from '../components/Layout2'

class Ess extends React.Component {
    render () {
        return (
            <Layout2>
                  <div id="main">
                    <section id="articles" className="titles"> 
                        <div id="ess">
                            <article className="ess-cont" id="box_9">
                            <div id="content">
                                <h2> Qu'est-ce que l'économie sociale et solidaire ?</h2>
                                <div className="border"></div>
                                <h3> C'est une branche de l'économie...</h3>
                                <p>Elle est en effet constituée d'entreprises qui participent activement au developpement économique en produisant 
                                    des biens et des services et ce dans de nombreux domaines d'acitivté. Elle et connait une croissance reguliere. 
                                    </p>
                               
                                <h3>...Sociale</h3>
                                <p>Elle se définit notamment par les statuts des structures qui la composent. 
                                    Promethée est une SCOP (Société Coopérative et participative) dont les statuts sont organisés
                                     sur le modèle d'une SARL avec cependant quelques particularités. Souhaitant mettre 
                                     en avant l'humain sur le capital, les entreprises de l'ess , comme la notre, adoptent une gestion 
                                     collective </p>

                                <h3>...et Solidaire</h3>
                                <p>L'organisation de notre structure implique une grande implication de chacun dans celle-ci. En effet
                                    chaque salarié de l'entreprise est ou à vocation a être associés de la SCOP. Ce particularisme implique 
                                    des droits (le plus emblematique est probablement l'election du ou des dirigeants) mais aussi son corollaire : 
                                    des devoirs et notamment une plus grande implication dans les résultats et le devenir de l'entreprise.
                                    </p>
                            </div>     
                                
                            </article>
                        </div>
                    </section>                   
                  </div>
            </Layout2>   
        )
    }
}
export default Ess

