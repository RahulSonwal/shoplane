import React from 'react'
import './navbar.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const state = useSelector((state) => state.handleCart)

    const state1 = useSelector((state1) => state1.handleFav)

    return (
        <nav>
            <div className='container'>
                <div>
                    <NavLink className='logo' to="/">SHOP<span className='logo-span'>LANE</span></NavLink>
                </div>
                <div className='nav-container'>
                    <ul >
                        <li className='menu-items'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='menu-items'>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        <li className='menu-items'>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className='menu-items'>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='nav-buttons'>
                    <NavLink to="/login" className="nav-btn">Login</NavLink>
                    <NavLink to="/signup" className="nav-btn">Sign Up</NavLink>
                    <NavLink to="/favorites" className="nav-btn">Favorites({state1.length})</NavLink>
                    <NavLink to="/cart" className="nav-btn">Cart({state.length})</NavLink>
                </div>
            </div>
        </nav >
    )
}

export default Navbar