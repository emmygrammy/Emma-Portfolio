import React from "react";
import Header from "./Assets/Components/Header";
import Hero from "./Assets/Components/Hero";
import CallToAction from "./Assets/Components/CallToAction";
import Myskill from "./Assets/Components/MySkill";
import LatestWork from "./Assets/Components/LatestWork";
import LogoBar from "./Assets/Components/LogoBar";
import Testimonia from "./Assets/Components/Testimonia";
import Footer from "./Assets/Components/Footer";

function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <CallToAction/>
        <Myskill/>
        <LatestWork/>
        <LogoBar/>
        <Testimonia/>
        <Footer/>
        </>
    )

}

export default Home;