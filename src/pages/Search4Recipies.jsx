import React,{useEffect, useState} from 'react'  
import { Link } from 'react-router-dom';

import Axios from 'axios'

const ApiKey = '53e2afa895d944b4b96f71204850f1e5';

function Search4Recipies() {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipe = async searchTerm =>{
      const response = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&query=${searchTerm}&diet=vegetarian`)
      return response.data;
    }

    useEffect(()=>{
        fetchRecipe()
    }, [])

    
  return (
    <main className='w-full h-screen flex items-center justify-center bg-lime-200'>
        
        <div className='flex flex-col items-center justify-center w-1/2 min-h-[500px] p-3 my-5 bg-lime-300 rounded-lg shadow-md'>
          <h1 className='sm:text-2xl md:text-3xl lg:text-4xl font-bold tex-center text-green-700'>Find your next veg meal</h1>
          <div className='w-full flex sm:flex-col md:flex-row lg:flex-row justify-around items-center mt-7'>
            <input 
                type="text" 
                placeholder='Search for Recipe'
                className='w-3/4 h-10 rounded-lg sm:mb-5 md:mb-0 lg:mb-0' />
            {/*Link from react-router-dom to navigate to the "/recipiesCards" route*/}
            <Link to="/recipiesCards">
              <button className='w-24 h-10 bg-green-700 rounded-lg text-white'>
                Click here!
              </button>
            </Link>
          </div>

        </div>
    </main>
  )
}

export default Search4Recipies