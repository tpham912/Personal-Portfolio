import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <> 
        <AboutMe/>
        <Projects/>
        <hr class="line1"></hr>
        <Link to='/contactMe'>
                <button className="btn-Contact">Direct Message</button>
        </Link>
        </>
        
    )
}

export default Main
