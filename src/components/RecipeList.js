import React from 'react'
import { Link } from 'react-router-dom'
import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'

// Styles
import './RecipeList.css'
import { useTheme } from '../hooks/useTheme'
export default function RecipeList({ recipeProps }) {
    const { mode } = useTheme()
    if (recipeProps.length === 0) {
        return <div className='error'>No recepies to load...</div>
    }
    const handleClick = (id) => {
        // delete data from database
        projectFirestore.collection('recipes').doc(id).delete()
    }
    return (
        <div className='recipe-list'>
            {recipeProps.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p> {recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)} ...
                        <Link to={`/recipes/${recipe.id}`}>Cook This</Link></div>
                    <img
                        className='delete'
                        src={Trashcan}
                        alt='trashcan'
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}
