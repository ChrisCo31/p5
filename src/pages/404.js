
import React from 'react'
import Menu from "../components/Menu";
import Footer from '../components/Footer';
class quatre extends React.Component {
    render () {
        return (
       
            
                  <div id="main">
                       <Menu />
                    <section id="articles" className="titles"> 
                            <article className="lost" id="box_404">
                            <h1>ERREUR 404 !</h1>
                            <h2> Page non trouvée :'(</h2> 
                            </article>
                        
                    </section>
                    <Footer />
                  </div>
               
            
        )
    }
}
export default quatre

