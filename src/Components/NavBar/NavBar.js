import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <Link className="linkItem" to="/"> Home </Link>
            <Link className="linkItem" to="/users"> Users </Link>
            <Link className="linkItem" to="/comments"> Comments </Link>
        </nav>
    )
}

export default NavBar
