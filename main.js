"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<header>' + coffee.name + '</header>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var nameSelector = searchBarElement.value;
    coffees.forEach(function(coffee) {
        if(roastSelection.value === "all"){
            selectedRoast = coffee.roast
        }
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(nameSelector.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var searchBarElement = document.getElementById('searchBar');
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var coffeeSearch = document.querySelector('#coffees')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


var potentialResults = ["light", "dark", "medium", "light city", "half city", "cinnamon",
"city", "american", "breakfast", "high", "continental", "new orleans",
"european", "espresso", "viennese", "italian", "french"];






searchBarElement.addEventListener("keyup", updateCoffees)

