import React from 'react'
import Layout2 from '../components/Layout2'
import Contact from '../components/Contact'


class Ess extends React.Component {
    render () {
        return (
            <Layout2>
                  <div id="main">
                    <section id="articles" className="titles"> 
                        <div id="ess">
                            <article className="ess-cont" id="box_9">
                            <div id="content">
                                <h2> Devenons partenaires</h2>
                                <div className="border"></div>
                                <h3> Genèse </h3>

                                <p>Devant la complexification du monde, il est essentiel de mixer nos compétences, 
                                   d'apprendre de nos pratiques, avec toujours, au coeur de nos préoccupations, la qualité de service. </p>
                                <p>Nous pensons que c'est de l'échange et de la coconstruction que naissent les plus belles réalisations.</p>
                               
                                <p>Nous souhaitons rencontrer et partager avec toute personne ou organisme, peu importe son statut, 
                                    qui se reconnait dans les valeurs de l'économie sociale et solidaire et 
                                    qui souhaite mettre en oeuvre un projet autour de l'univers digital. </p>
                                <div className="Idees">
                                <h3> Quelques une de nos Idées</h3>

                                <p> Plusieurs projets s'appuyant sur les supports audio et vidéo sont dans nos cartons, en particulier : 
                                    Animations Stop Motion, création de podcasts audio, littérature numérique.</p>
                                <p> Ca vous parle ? Vous voulez en savoir plus ? Ou tout simplement vosu avez d'autres idées 
                                    de collaboration ?</p>
                                <h3> Ecrivez nous ce qui vous motive !</h3>
                                </div>
                                <div className="talk">
                                <Contact/>
                                </div>
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

