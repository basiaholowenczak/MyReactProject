const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

//Function to get recipes
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2> Fetching recipes... </h2>";
    const data = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=${query}')
    const response = await data.json();

    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = '<img src = "${meal.strMealThumb}"> <h3>${meal.strMeal}</h3> <p><span>${meal.Area}</span> Dish</p> <p> Belongs to<span>${meal.Category}</span> Category</p>'

        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        recipeContainer.appendChild(recipeDiv);
    });
}

searchBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
    //console.log("Button Clicked");
});