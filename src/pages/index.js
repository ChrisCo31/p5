import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

class HomeIndex extends React.Component {
    render () {
        return (
            <Layout>
                  <div id="main">
                    <section id="articles" className="titles">
                        <div id="first">
                            <article className="zoom" id="box_1">
                                <Link to="/ess" id="link" >
                                    <header className="major">
                                        <h3>Vous avez dit ESS ?</h3>
                                        <p>  </p> 
                                    </header>
                                </Link>
                            </article>                           
                            <article className="zoom" id="box_2">
                            <Link to="/prestations" id="link" >
                                <header className="major">
                                    <h3>Découvrez nos Prestations !</h3>

                                </header>
                            </Link>
                            </article>
                        </div>
                        <div id="second">
                        <article  className ="zoom" id="box_3">
                            <Link to="/realisations" id="link" >
                                <header className="major">
                                    <h3>Un aperçu de nos Réalisations...</h3>
                                </header>
                            </Link>
                        </article>
                        <article id="box_contact">
                            <Contact />
                        </article>
                        </div>
                        <div id="third">
                            <article className="zoom" id="box_4" >
                            <Link to="/partenariat" id="link" >
                                <header className="major">
                                    <h3>Devenons Partenaires</h3>
                                </header>
                            </Link>
                            </article>
                            <article className="zoom" id="box_5">
                                <Link to="/equipe" id="link" >
                                    <header className="major">
                                        <h3>Qui sommes nous ?</h3>

                                    </header>
                                </Link>
                            </article>
                            <article className="zoom" id="box_6" >
                                <Link to="/blog" id="link" >
                                    <header className="major">
                                        <h3>Visitez notre Blog</h3>

                                    </header>
                                </Link>
                            </article>
                        </div>
                    </section>
                   
                  </div>
            </Layout>   
        )
    }
}
export default HomeIndex