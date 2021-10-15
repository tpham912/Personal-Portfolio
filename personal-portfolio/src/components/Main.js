import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <> 
        <AboutMe/>
        <Projects/>
        <Link to='/contactMe'>
                <button className="btn-Contact">Message Me</button>
        </Link>
        </>
        
    )
}

export default Main
