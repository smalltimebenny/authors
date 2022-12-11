import React from 'react'
import {Link, NavLink} from "react-router-dom"


const NavBar = () => {
    return (
        <div>
            <h1>Authors List</h1>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/form">Add an Author Form</NavLink>
        </div>
    )
}

export default NavBar