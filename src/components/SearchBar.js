import React, { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'
export default function Search() {

    const [term, setTerm] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // ?q=
        navigate(`/search?q=${term}`)
    }
    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input
                    type="text"
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}
