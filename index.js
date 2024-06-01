const API_KEY = "4aa61360a5d34607907c785fdbab67c8";
const recipelistel = document.getElementById("recipe-list");

async function getRecipes() {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
        
        
        const data = await response.json();
        return data.recipes;
}

function displayRecipes(recipes){
    recipelistel.innerHTML = ""
    recipes.forEach()
}

async function init() {
    const recipes = await getRecipes();
    if (recipes) {
        displayRecipes();
    }
}

init();
