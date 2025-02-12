import React,{useEffect, useState} from 'react'  
import { fetchRecipe } from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import './Search4Recipies.css'
import Navbar from './Navbar';

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
    <>
      <Navbar />
      <main className="search-container">
        <div className="search-wrapper">
          <h1>Find your next veg meal</h1>
          <div className="search-input-container">
            <input 
              type="text" 
              className="search-input"
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search for vegetarian recipes"
            />
          </div>
          <div className="recipes-grid">
            {recipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <Link to={'/recipiesCards'} className="recipe-link">
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Search4Recipies