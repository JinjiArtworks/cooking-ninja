import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'


export default function Search() {
    const queryString = useLocation().search
    const queryParmas = new URLSearchParams(queryString)
    const query = queryParmas.get('q')
    const url = 'http://localhost:3000/recipes?q=' + query
    const { error, isPending, data } = useFetch(url)
    return (
        <div>
            <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'> Loading ...</p>}
            {data && <RecipeList recipeProps={data}/>}
        </div>
    )
}
