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
                            <Link to="/ess" id="box_1" className ="zoom">
                                <article >                                
                                        <header className="major">
                                            <h3>Vous avez dit ESS ?</h3> 
                                        </header>                             
                                </article>
                            </Link>
                            <Link to="/prestations" id="box_2" className ="zoom" >                           
                                <article >
                                    <header className="major">
                                        <h3>Découvrez nos Prestations !</h3>
                                    </header>
                                </article>
                            </Link>
                        </div>
                        <div id="second">
                            <Link to="/realisations" id="box_3" className ="zoom" >
                                <article   >
                                    <header className="major">
                                        <h3>Un aperçu de nos Réalisations...</h3>
                                    </header>
                                </article>
                            </Link>
                                <article id="box_contact">
                                    <Contact />
                                </article>
                        </div>
                        <div id="third">
                            <Link to="/partenariat"id="box_4" className="zoom" >
                                <article   >
                                    <header className="major">
                                        <h3>Devenons Partenaires</h3>
                                    </header>
                                </article>
                            </Link>
                            <Link to="/equipe" id="box_5" className="zoom">
                                <article  >
                                    <header className="major">
                                        <h3>Qui sommes nous ?</h3>
                                    </header>
                                </article>
                            </Link>
                            <Link to="/IndexBlog"  id="box_6" className="zoom">
                                <article  >
                                        <header className="major">
                                            <h3>Visitez notre Blog</h3>
                                        </header>    
                                </article>
                            </Link>
                        </div>
                    </section>
                   
                  </div>
            </Layout>   
        )
    }
}
export default HomeIndex