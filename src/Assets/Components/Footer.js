import React from "react";
import '../css/Footer.css';
import discord from '../images/discord.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import dribbble from '../images/dribbble.svg';
import behance from '../images/behance.svg';
import { Link } from "react-router-dom";

function Footer (){
    return(
        <>
        <div className="contact-section">
                <div className="lets-work-together">Lets work together</div>
                <div className="contact-section-content">
                    <div className="contact-info">
                    <div className="title-description">
                        <div className="this-is-a-template-figma-file-turned-into-code-using-anima-learn-more-at-anima-app-com-this-is-a-template-figma-file-turned-into-code-using-anima-learn-more-at-anima-app-com">
                        This is a template Figma file, turned into code using Anima. Learn
                        more at AnimaApp.com This is a template Figma file, turned into code
                        using Anima. Learn more at AnimaApp.com
                        </div>
                    </div>
                    {/* LINKS TO THE SOCIAL MEDIA HANDLE */}
                    <div className="social-links">
                        <Link to={"/"}><img className="discord" src={discord} /></Link>
                        
                        <Link to={"/"}><img className="facebook" src={facebook} /></Link>
                        
                        <Link to={"/"}><img className="dribbble" src= {dribbble}/></Link>
                        
                        <Link to={"/"}><img className="nstagram" src={instagram} /></Link>
                        
                        <Link to={"/"}><img className="behance" src={behance} /></Link>
                        
                    </div>
                    </div>

                    {/* CONTACT FORM */}
                <div className="contact-form">
                    <form className="input-fields">
                        
                        <input className="input-field"type="text" name="name" placeholder="Name" required/>
                        <input className="input-field"type="email" name="email" placeholder="Email" required/>

                        <button className="button">
                        <div className="contact">Submit</div>
                    </button>
                    </form>

                    

                    </div>
                </div>
        </div>

        
        
        </>

    )
}

export default Footer;