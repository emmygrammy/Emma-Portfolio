import React from "react";
import '../css/Hero.css';
import emma from '../images/emma.png';
import { Link } from "react-router-dom";

function Hero(){
    return(
        <>
        <div className="version-1">
            <div className="header-content">
                <div className="h-title-subtitle">
                    <div className="hero-branding-image-making"></div>
                    <div className="hero-visual-designer">OJEABUO EMMANUEL</div>
                    <div className="this-is-a-template-figma-file-turned-into-code-using-anima-learn-more-at-anima-app-com">
                    Front-End Developer | Cloud & DevOps Engineer
                    
                    </div>
                </div>
                <div className="button">
                  <Link to="https://www.linkedin.com/in/ojeabuo-emmanuel-34a338332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hero-contact">Contact</Link>
                </div>
            </div>
            <img className="header-image-1" src={emma} />
        </div>

        
        </>

    )
}

export default Hero;