import React from "react";
import {Link} from "react-router-dom";
import {Button} from "./Button";
import './Banner.css'

function Banner({
    bgImage, title, description,buttonLabel,lightText,
                }){
    return (
        <>
            <div  style={{backgroundImage:`url(${bgImage})`}}>
            <div className='banner__container'>
            <div className='banner__hero-row'>
            <div className='banner__col'>
            <div className='banner__hero-text-wrapper'>
            <h1 className={lightText ? 'heading':'heading dark'}>{title}</h1>
            <p className={lightText ? 'banner__hero-subtitle':'banner__hero-subtitle dark'}>{description}</p>
            <Link to='/signup'>
            <Button buttonSize='btn--wide' buttonColor='blue'>
        {buttonLabel}
            </Button>
            </Link>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Banner;