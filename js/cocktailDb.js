const searchField = () =>{
    const searchText = document.getElementById('input-search')
    // searchText.textContent = ''
    const inputText = searchText.value;  
    // clear the field
    searchText.value = '';

    // load search field
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadCocktail(data.drinks))
}

const displayLoadCocktail = cockTails =>{
    for(const cockTail of cockTails){
        const divContainer = document.getElementById('div-container')
        // divContainer.textContent = '';
        const div = document.createElement('div')
        div.classList.add('col');
        

        div.innerHTML = `
        <div onclick="loadDetails(${cockTail.idDrink})" class="card">
        <img src="${cockTail.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${cockTail.strDrink}</h5>
          <p class="card-text">${cockTail.strInstructions.slice(0, 45)}</p>
          </div>
      </div>
        `;
        divContainer.appendChild(div)
    }
}

const loadDetails = cockId =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cockId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data))
}

const displayDetails = cocktail =>{
    const divContainer = document.getElementById('details')
    const div  = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card h-100">
    <img src="${cocktail.drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cocktail.drinks[0].strDrink}</h5>
      <p class="card-text">${cocktail.drinks[0].strInstructions.slice(0, 45)}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last update</small>
    </div>
  </div>
    `;
    divContainer.appendChild(div)
}


