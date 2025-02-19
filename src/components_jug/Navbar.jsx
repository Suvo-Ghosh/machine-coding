import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    return (
        <div className="py-4 bg-orange-600 text-white flex gap-4 text-2xl justify-center">
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/jug'>Jug</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/star'>Star</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/search'>Search</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/form'>FormValidation</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/tabform'>TabForm</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/auto-com-search'>Search Complete</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/file-explorer'>FileExplorer</NavLink>
        </div>
    )
}

export default Navbar
