
import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

// Styleas
import './Home.css'
// import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
export default function Home() {
    // const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    // how to connect into the server
    useEffect(() => {
        setIsPending(true)
        // onSnapshot function is real time data
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No recipes found')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach((doc) => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsub()
    }, [])
    return (
        <div className='home'>
            {error && <p className='error'> {error}</p>}
            {isPending && <div className='loading'>Loading ...</div>}
            {data && <RecipeList recipeProps={data} />}
        </div>
    )
}
