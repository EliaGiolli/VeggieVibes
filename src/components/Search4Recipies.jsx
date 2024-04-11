import React,{useEffect, useState} from 'react'
import Axios from 'axios'

const ApiKey = '53e2afa895d944b4b96f71204850f1e5';

function Search4Recipies() {
    useEffect(()=>{
        const fetchRecipe = async ()=>{
            const response = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&query=chicken`)
            console.log(response)
        }
        fetchRecipe()
    })
  return (
    <>
        
    </>
  )
}

export default Search4Recipies