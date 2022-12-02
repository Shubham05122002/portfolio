import React from 'react'
import {NavLink} from 'react-router-dom'
function NavBar() {
    return (
        <div className='nav-bar'>
            <ul className = 'nav-bar-list'>
                <li>
                    <NavLink
                        exact to='/'
                        className={(isActive) =>
                        isActive.isActive ? "active-lin neonText" : "style-link"} > 
                        Me? 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        exact to='/skills'
                        className={(isActive) =>
                        isActive.isActive ? "active-link neonText" : "style-link"} > 
                         Skills
                    </NavLink>
                </li> 
                <li>
                    <NavLink 
                        exact to='/projects'
                        // isActive gets passed on as an object thats why we need to extract the isActive property from it
                        className={(isActive) =>
                        isActive.isActive ? "active-link neonText" : "style-link"} > 
                         Projects
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar