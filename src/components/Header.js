import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js'
import './Header.css'
import Button from './Button'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <Particles 
        className='particles-canvas'
        params = {{
            particles: {
            number: {
                value:30,
                density: {
                enable:true, 
                value_area: 900,
                }
            }
            }
        }}

        />
      <div className='header-wraper'>
          <div className='main-info'>
              <Typed className='typed-text'
                     strings = {["Web Development", "Python", "Java", "Salesforce" ,"Web Design"]}
                     typeSpeed={40}
                     backSpeed={60}
                     />
                     <Link className='btn-main-offer ' to='/signup'>
                                    <Button buttonSize='btn--medium' buttonColor='blue'>
                                        {'Contact'}
                                    </Button>
                                </Link>
          </div>
      </div>
      </>
    )
}

export default Header
