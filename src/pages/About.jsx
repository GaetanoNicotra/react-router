import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/'>HOMEPAGE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about'>ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contacts'>CONTACTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/products'>PRODUCTS</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <h2>ABOUT</h2>
            </div>

        </>

    )
}

export default About
