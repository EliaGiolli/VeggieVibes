import React,{useEffect, useState} from 'react'  
import { fetchRecipe } from '../Api/Api';
import { Link } from 'react-router-dom';

function Search4Recipies() {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);

    {/* useEffect() used for fetching the data from the user imput and storing it in the state */}
    useEffect(() => {
      if (!searchTerm) return;
  
      fetchRecipe(searchTerm)
        .then(data => {
          setRecipes(data.results);
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    }, [searchTerm]);
    
  return (
    <main className='w-full h-screen flex items-center justify-center bg-lime-200'>
        
        <div className='flex flex-col items-center justify-center w-1/2 min-h-[500px] p-3 my-5 bg-lime-300 rounded-lg shadow-md'>
          <h1 className='sm:text-2xl md:text-3xl lg:text-4xl font-bold tex-center text-green-700'>Find your next veg meal</h1>
          <div className='w-full flex sm:flex-col md:flex-row lg:flex-row justify-around items-center mt-7'>
            <input 
                type="text" 
                className='w-3/4 h-10 rounded-lg sm:mb-5 md:mb-0 lg:mb-0'
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search for vegetarian recipes"
                />
          </div>
          {/*Link from react-router-dom to navigate to the "/recipiesCards" route when a card is clicked*/}
          <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 mt-8">
              {recipes.map(recipe => (
                <div key={recipe.id} className="flex justify-center text-center items-center bg-white rounded-lg shadow-md p-5">
                  <Link to={'/recipiesCards'} className='block w-full'>
                    <img src={recipe.image} alt={recipe.title} className='w-full h-auto rounded-t-lg' />
                    <h3 className='text-lg font-bold mt-2 py-3'>{recipe.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
        </div>
    </main>
  )
}

export default Search4Recipies