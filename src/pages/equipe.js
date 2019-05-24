import React from 'react'
import Layout2 from '../components/Layout2'

import Rasko31 from '../assets/pictures/rasko31.png'
import Alex from '../assets/pictures/alex.png'


class Equipe extends React.Component {
    render () {
        return (
            <Layout2>
                 <div className="container-equipe">
                    <h1>Notre équipe</h1>
                        <div className="profils p-dev">                                   
                            <h2>CHRISTEL</h2>
                            <img
                                src={Rasko31} 
                                alt="portrait Christel"
                                height="170px" 
                                width="170px" />                                   
                            <h3>Developpement </h3>    	
                        </div>
                        <div className="profils p-market">
                            <h2>ALEX</h2>
                            <img
                                src={Alex} 
                                alt="portrait Alex"
                                height="170px" 
                                width="170px" />
                            <h3>Marketing  </h3>    	
                        </div>
                        <div className="profils p-design">
                            <h2> CLEMENT</h2>
                            <img
                                src={Rasko31} 
                                alt="portrait Clement"
                                height="170px" 
                                width="170px" />                                    
                            <h3>Design </h3>    	
                        </div>
                        
                  </div>
                         
            </Layout2>     
        )
    }
}
export default Equipe