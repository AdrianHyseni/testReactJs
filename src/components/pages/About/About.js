import React from 'react'
import Banner from "../../Banner";
import HeroSection from "../../HeroSection";
import {bannerObjOne, heroObjOne, heroObjFour, heroObjThree, heroObjTwo} from "./Data";
function About(){
    return(
        <>
            <Banner {...bannerObjOne}/>
            <HeroSection {...heroObjOne}/>
            <HeroSection {...heroObjTwo}/>
            <HeroSection {...heroObjThree}/>
            <Banner {...bannerObjOne}/>
            <HeroSection {...heroObjFour}/>

        </>
    )
}

export default About;