import React from "react";
import HeroSection from "../../HeroSection";
import {homeObjOne, homeObjFive,homeObjFour,homeObjThree,homeObjTwo, bannerObjOne} from './Data';
import Pricing from '../../Pricing/Pricing'
import Banner from "../../Banner";
import Header from "../../Header";
function Home(){
    return (
        <>
            <Header />
            <Banner {...bannerObjOne}/>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjThree}/>
            <Pricing />
            <HeroSection {...homeObjFour}/>
            <HeroSection {...homeObjFive}/>
        </>

    )
}

export default Home