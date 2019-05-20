import React from "react";

const Contact = (props) => (
    <div className="form">   
        <section>
            <form name="contact" method="post" data-netlify="true" >    
                <input type="hidden" name="form-name" value="contact" />
                <div className="fieldName">
                    <div className="col-25">
                            <label htmlFor="name">Nom</label>
                    </div>
                    <div className="col-75">
                            <input type="text" name="name" id="name" />
                    </div>
                </div>
                <div className="fieldEmail">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="email" id="email" />
                     </div>   
                </div>
                <div className="fieldMessage">
                    <div className="col-25">
                            <label htmlFor="message"> Parlez nous de vous</label>
                    </div>
                    <div className="col-75">
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>    
                </div>
                <ul className="actions">
                    <div className="col-75">
                        <input type="submit" value="Envoyer" className="special" />
                    </div>    
                </ul>            
            </form>
        </section>
    </div>
   
    
)

export default Contact