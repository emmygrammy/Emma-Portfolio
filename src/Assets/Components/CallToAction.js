import React from "react";
import '../css/CallToAction.css';
import Frame1 from '../images/Frame1.svg';
import Frame2 from '../images/Frame2.svg';
import { Link } from "react-router-dom";


function CallToAction(){
    return(
        <>
        <div className="version-2">
            <img className="frame-1" src={Frame1} />
            <div className="text">
                <div className="branding-image-making">About me </div>
                {/* <div className="visual-designer">Visual Designer</div> */}
                <div className="callToaction-text">
                Hi there! I’m , a versatile and enthusiastic Front-End Developer with a strong background in Cloud Computing and DevOps. Over the years, I’ve honed my expertise in developing engaging, user-friendly web applications, while also embracing modern cloud technologies and automation practices to optimize software delivery pipelines and infrastructure.
                </div>
                <div className="cta-button">
                <Link to={"https://www.linkedin.com/in/ojeabuo-emmanuel-34a338332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="cta-contact">Contact</Link>
                </div>
            </div>
            <img className="frame-2" src={Frame2} />
        </div>

        </>
    )


}

export default CallToAction;