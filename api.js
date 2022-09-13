const singleLoadUser = () =>{
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => displayLoadUser(data))
}

singleLoadUser();

const displayLoadUser = user =>{
    console.log(user.results[0])
    const divContainer = document.getElementById('container')
    const div = document.createElement('div')
    div.innerHTML = `
        <h2>${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}</h2>
        <p>${user.results[0].email}</p>
    `;
    divContainer.appendChild(div)

}

const loadMeals = searchText =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearch = displayStyle =>{
    document.getElementById('meal-container').style.display = displayStyle;
}
const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText)

    // show spinner
    toggleSpinner('block')
    toggleSearch('none')
    document.getElementById('search-field').value = '';
}

const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container')
        mealContainer.textContent = '';
   
        meals?.forEach(meal =>{
            if(!meals){
                const divContainer = document.getElementById('not-found')
                const div = document.createElement('div')
                div.innerHTML = `
                    <p>This product is not found. Please enter a valid product.</p>
                `;
                divContainer.appendChild(div)
            }
            const div = document.createElement('div')
            div.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <p>${meal.strIngredients18 ? meal.strIngredients18 : ''}</p>
                <button onclick="loadMealDetails('${meal.strMeal}')">Details</button>

            `;
            mealContainer.appendChild(div)
        });
        toggleSpinner('none')
        toggleSearch('block')
    }

loadMeals('fish')

