import React from "react";
import '../css/Myskill.css';
import card1 from '../images/card1.svg';
import card2 from '../images/card2.svg';
import card3 from '../images/card3.svg';
import card4 from '../images/card4.svg';

function Myskill(){
    return(
        <>
        <h1>My Skills</h1>
    <div className="skill-container">
        <div className="s-cards-section">
            <div className="skills-card">
            <img className="skills-card-icon" src={card2} />
            <div className="s-title-description">
                <div className="s-title">HTML & CSS</div>
                <div className="s-word">
                HTML is the structure of web pages, CSS design content and layout.
        
                </div>
            </div>
            </div>
            <div className="skills-card">
            <img className="skills-card-icon2" src={card1} />
            <div className="s-title-description">
                <div className="s-title">BOOSTRAP|TAILWIND CSS</div>
                <div className="s-word">
                Bootstrap and Tailwind CSS: pre-designed framework that offers responsive layout 
                </div>
            </div>
            </div>
        </div>
        <div className="s-cards-section">
            <div className="skills-card">
            <img className="skills-card-icon3" src={card3} />
            <div className="s-title-description">
                <div className="s-title">JAVASCRIPT & GITHUB</div>
                <div className="s-word">
                JavaScript used to create interactive and dynamic content on websites, 
                while GitHub is a platform for version control.
                </div>
            </div>
            </div>
            <div className="skills-card">
            <img className="skills-card-icon4" src={card4} />
            <div className="s-title-description">
                <div className="s-title">REACT & REACT NATIVE</div>
                <div className="s-word">
                React is a JavaScript library for building user interfaces, 
                while React Native allows for building mobile applications using React components.
                </div>
            </div>
            </div>
        </div>
</div>

        </>
    )

}

export default Myskill;