// Styles
import './Create.css'

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'; // r v6.0
import { projectFirestore } from '../../firebase/config'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const navigate = useNavigate()

    // FETCH FUNCTION TO SEND THE DATA INTO JSON (NEXT SHOULD BE TO DB)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }

        // add document using a add function
        try {
            await projectFirestore.collection('recipes').add(doc)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()
        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }
    return (
        <div className='create'>
            <h2 className="page-title">Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title : </span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                {/* Ingredients go here */}
                <label>
                    <span>Recipe Ingredients : </span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className="btn">Add</button>
                    </div>
                </label>
                <p>Currents ingredients : {ingredients.map(i =>
                    <em key={i}> {i}, </em>)}</p>

                <label >
                    <span>Recipe Method : </span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label >
                    <span>Cooking Time : </span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}




