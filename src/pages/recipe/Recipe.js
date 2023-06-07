import React, { useEffect, useState } from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {

  // useParams to get specified id for each props that need if to be shown 
  const { id } = useParams()
  const { mode } = useTheme()
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Couldnt find the recipes')
      }

    })
    return () => unsub()
  }, [id])
  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: ' Im updated!'
    })
  }
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <div className='loading'>Loading ...</div>}
      {recipe && (
        <div>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </div>
      )}
    </div>
  )
}
