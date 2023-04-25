let bandInfo = document.querySelector('#bandInfo')

let ourClass= [
    {name: 'Steve', city: "Chapel Hill"},
    {name: 'Teddy', city: "Charlotte"},
    {name: 'Q', city: "Raleigh"},
    {name: 'Matt', city: "Raleigh"},
    {name: 'Laura', city: "Pittsboro"},
    {name: 'Alain', city: "Mebane"},
    {name: 'Anna', city: "Saxpahaw"},
    {name: 'Alex', city: "Cary"},
    {name: 'Meagan', city: "Clayton"},
    {name: 'Rebecca', city: "Durham"},
]

let anotherClass = [];
let citiesListed = [];

function findPeopleByCity(city, people) {
    //log an array of the people who live in the specified city
    let peopleInCity = []
    for (let person of people){
        if (person.city === city){
            peopleInCity.push(person.name)
        }
    }
    // console.log(peopleInCity)
    // use return to generate output from a function, stored in memory
    return peopleInCity
}


function createCityDiv(city, people) {
    //this function takes one city and array of people,
    //builds a div for the city, creates an h1 containing an h1 
    //with the city name and a div with p's for each person in that city.
    //Returns that div for the city to be used in another function.
    let cityDiv = document.createElement('div')
    // creating a new div to hold one city & the corresponding names
    let cityPeople = findPeopleByCity(city, people)
    let cityE1 = document.createElement('h1')
    cityE1.innerText = `Band Members in ${city}:`
    bandInfo.appendChild(cityE1)
    for(let person of cityPeople) {
       let personE1 = document.createElement('p')
       personE1.innerText = person
       cityDiv.appendChild(personE1)
    }
    bandInfo.appendChild(cityDiv)
    // append that cityDiv to our empty bandInfo div on the page
}

// createCityDiv("Raleigh", ourClass)
// activates the function in line 39, using the arguments passed here

for (let member of ourClass) {
    if (!citiesListed.includes(member.city)){
    // checks if city has already been listed before listing it    
    createCityDiv(member.city, ourClass);
    citiesListed.push(member.city);
    }
}

// this for loop is going through each city and creating a new div
// for that city