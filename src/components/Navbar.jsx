import React from 'react';
import { NavLink } from 'react-router';
import ProfastLog from './ProfastLog';

const Navbar = () => {
    const link = <>
    <li>
        <NavLink>Services</NavLink>
    </li>
    <li>
        <NavLink>Coverage</NavLink>
    </li>
    <li>
        <NavLink>About Us</NavLink>
    </li>
    <li>
        <NavLink>Pricing</NavLink>
    </li>
    <li>
        <NavLink>Be a Rider</NavLink>
    </li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl w-11/12 mx-auto mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                    </ul>
                    </div>
                    <ProfastLog/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign In</a>
                    <a className="btn">Be a rider</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;