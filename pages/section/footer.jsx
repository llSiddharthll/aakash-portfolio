import React from 'react';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        
                            <span className="copy">&copy; Copyright {currentYear} - Aakash</span>
                    
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/aakash.malik.27" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/its_aakash3" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/aakash-malik-676688314" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;