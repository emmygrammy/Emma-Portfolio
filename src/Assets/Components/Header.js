import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import favicon from '../images/favicon.png'


function Header(){
    return(
        <>
        <div className="navigation">
           <div className="logo">
            <img className='logo-img' src={favicon} alt='logo'/>
              Emmy
           </div>
            <div className="menu-items">
                 <Link to={"https://www.facebook.com/share/1CwmCwKkDE/"} className="about">About</Link>
                 <Link to={"http://www.youtube.com/@Learnliftapp2"} className="work">Work</Link>
                 <Link to={"https://www.linkedin.com/in/ojeabuo-emmanuel-34a338332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="h-contact">Contact</Link>
           </div>
       </div>

        </>
    )

}

export default Header;