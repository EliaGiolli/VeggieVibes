// RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../Api/Api';
import Navbar from './Navbar';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeDetails(id)
      .then(data => {
        console.log(data);
        setRecipe(data);
      })
      .catch(error => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
    < Navbar />
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            {recipe.analyzedInstructions[0].steps.map(step => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      </div>
    
    </>
  );
}

export default RecipeDetails;
