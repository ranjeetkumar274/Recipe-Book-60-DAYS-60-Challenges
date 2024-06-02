const API_KEY = "4aa61360a5d34607907c785fdbab67c8";
const recipelistel = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipelistel.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        
        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText =recipe.title;
        
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipelistel.appendChild(recipeItemEl);
    });
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}

async function init() {
    try {
        const recipes = await getRecipes();
        if (recipes) {
            displayRecipes(recipes); // Pass the recipes array to the displayRecipes function
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

init();
