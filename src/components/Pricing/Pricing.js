import React from "react";
import {Link} from "react-router-dom";
import {BsXDiamondFill, FaFire, GiCrystalize} from "react-icons/all";
import Button from "../Button";
import {IconContext} from 'react-icons/lib'
import './Pricing.css';

function Pricing() {
    return (
        <>
        <IconContext.Provider value={{color:'#fff',size:64}}>
        <div>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <Link to='signup' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div class='icon'>
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Trasaction</li>
                                    <li>2% Cash Back</li>
                                    <li>$10000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary'>
                                    Choose Plane
                                </Button>
                            </div>
                        </Link>
                        <Link to='signup' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div class='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Trasaction</li>
                                    <li>2% Cash Back</li>
                                    <li>$10000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='blue'>
                                    Choose Plane
                                </Button>
                            </div>
                        </Link>
                        <Link to='signup' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div class='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Unlimited</li>
                                    <li>5% Cash Back</li>
                                    <li>$10000 Limit</li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary'>
                                    Choose Plane
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
       </>
    );
}

export default Pricing