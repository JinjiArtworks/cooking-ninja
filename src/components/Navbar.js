import React from 'react'

import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles 
import './Navbar.css'
import SearchBar from './SearchBar'
export default function Navbar() {

    const { color } = useTheme()
    return (
        <div>
            <div className="navbar" style={{ background: color }}>
                <nav>
                    <Link to='/' className='brand'>
                        <h1>Cooking Ninja</h1>
                    </Link>
                    <SearchBar></SearchBar>
                    <Link to='/create'>
                        Create Recipes
                    </Link>

                </nav>
            </div>
        </div>
    )
}
