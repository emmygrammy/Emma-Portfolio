import React from "react";
import '../css/LatestWork.css';
import p1 from '../images/p1.svg';
import p2 from '../images/p2.svg';
import p3 from '../images/p3.svg';
import p4 from '../images/p4.svg';
import p5 from '../images/p5.svg';
import p6 from '../images/p6.svg';
import { Link } from "react-router-dom";


function LatestWork(){
    return(
        <>
    <div className="l-gallery-section">
            <div className="latest-work">Latest work</div>
            <div className="cards-section">
                <div className="gallery-card">
                
                <Link to={'/'}><img className="image" src={p1} /></Link>
                
                
                <div className="title-description">
                    <div className="project-title">Project 1</div>
                    <div className="ui-art-drection"></div>
                </div>
                </div>
                <div className="component-9">
                <Link to={'/'}><img className="image" src={p2} /></Link>
                
                <div className="title-description">
                    <div className="project-title">Project 2</div>
                    {/* <div className="ui-art-drection">UI, Art drection</div> */}
                </div>
                </div>
                <div className="component-10">

                <Link to={'/'}><img className="image" src={p3} /></Link>
                
                <div className="title-description">
                    <div className="project-title">Project 3</div>
                    {/* <div className="ui-art-drection">UI, Art drection</div> */}
                </div>
                </div>
                <div className="component-11">

                <Link to={'/'}><img className="image" src={p4} /></Link>
                
                <div className="title-description">
                    <div className="project-title">Project 4</div>
                    {/* <div className="ui-art-drection">UI, Art drection</div> */}
                </div>
                </div>
                <div className="component-12">

                <Link to={'/'}><img className="image" src={p5} /></Link>
                
                <div className="title-description">
                    <div className="project-title">Project 5</div>
                    {/* <div className="ui-art-drection">UI, Art drection</div> */}
                </div>
                </div>
                <div className="component-13">
                <Link to={'/'}><img className="image" src={p6} /></Link>
                
                <div className="title-description">
                    <div className="project-title">Project 6</div>
                    {/* <div className="ui-art-drection">UI, Art drection</div> */}
                </div>
                </div>
            </div>
    </div>

        
        </>

    )
}

export default LatestWork;