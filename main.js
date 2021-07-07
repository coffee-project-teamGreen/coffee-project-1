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
    var searchedCoffee = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || coffee.name === searchedCoffee) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light' || 'all'},
    {id: 2, name: 'Half City', roast: 'light' || 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light' || 'all'},
    {id: 4, name: 'City', roast: 'medium' || 'all'},
    {id: 5, name: 'American', roast: 'medium' || 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium' || 'all'},
    {id: 7, name: 'High', roast: 'dark' || 'all'},
    {id: 8, name: 'Continental', roast: 'dark' || 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark' || 'all'},
    {id: 10, name: 'European', roast: 'dark' || 'all'},
    {id: 11, name: 'Espresso', roast: 'dark' || 'all'},
    {id: 12, name: 'Viennese', roast: 'dark' || 'all'},
    {id: 13, name: 'Italian', roast: 'dark' || 'all'},
    {id: 14, name: 'French', roast: 'dark' || 'all'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffees')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


var potentialResults = ["light", "dark", "medium", "light city", "half city", "cinnamon",
"city", "american", "breakfast", "high", "continental", "new orleans",
"european", "espresso", "viennese", "italian", "french"];




var searchBarElement = document.getElementById("searchBar")

searchBarElement.addEventListener("keyup", searchCoffee)

function searchCoffee() {
    potentialResults.forEach(function (result) {

        var input = searchBarElement.value

        if (result.toLowerCase().includes(input.toLowerCase())) {
            console.log("Here is a potential result...")
            console.log(result)
        }

    })
}












// var coffeeInput = function() {}
//
//     var searchBarElement = document.getElementById("searchBar")
//     potentialResults.forEach(function (result) {
//
//         var whatUserIsSearchingFor = searchBarElement.value
//
//         if (result.toLowerCase().includes(whatUserIsSearchingFor.toLowerCase())) {
//             console.log("Here is a potential result...")
//             console.log(result)
//         }
//
//     })
// document.getElementById('searchBar').addEventListener('keyup', listener);
