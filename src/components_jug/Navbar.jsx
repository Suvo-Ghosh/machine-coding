import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    return (
        <div className="py-4 text-lg bg-orange-600 text-white flex gap-4 justify-center">
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/jug'>Jug</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/star'>Star</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/search'>Search</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/form'>FormValidation</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/tabform'>TabForm</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/auto-com-search'>SearchCompletion</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/file-explorer'>FileExplorer</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/pagination'>Pagination</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/progress-bar'>ProgressBar</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/faq'>FAQ</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-black' : undefined} to='/timer'>Timer</NavLink>
        </div>
    )
}

export default Navbar
