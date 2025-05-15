import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { path: '/', label: "Homepage" },
    { path: '/about', label: "About" },
    { path: '/contacts', label: "Contacts" },
    { path: '/products', label: "Products" }

]

const Navbar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg my-pd navbar-orange">
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            {links.map((link, index) => {
                                return <li key={index} className="nav-item me-4"> <NavLink className="custom-link" to={link.path}>{link.label}</NavLink></li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar
