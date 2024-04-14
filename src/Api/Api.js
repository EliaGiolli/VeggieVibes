import Axios from 'axios'

{/* API call for generic vegetarian recipies */}
const ApiKey = '53e2afa895d944b4b96f71204850f1e5';

export const fetchRecipe = async searchTerm =>{
    const response = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&query=${searchTerm}&diet=vegetarian`)
    return response.data;
  }

{/* Second API call for further info about the recipies */}  
export const getRecipeDetails = async id => {
    const response = await Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${ApiKey}`);
    console.log('Dati ottenuti dalla chiamata all\'API di Spoonacular:', response.data);
    return response.data;
};