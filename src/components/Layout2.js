import React from 'react'

import '../assets/css/main.css'
import Menu from "./Menu";
import Banner2 from "./Banner2";
import Footer from './Footer'



const Layout2 = ({ children}) => {
    return (
            <div className="siteContent">
              <Menu />
              <Banner2 />            
              {children}
              <Footer />            
            </div>
           
    )
  }
     
export default Layout2