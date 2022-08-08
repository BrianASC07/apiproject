// what if we used this as the api
// https://api.chucknorris.io/jokes/random
//https://api.chucknorris.io/ 

//Shrikar, Brian, Andres 

let button = document.querySelector('button');

const BASE_URl = "https://api.chucknorris.io/jokes/random"

let requestURL = `${BASE_URl}`;

function displayFact(data) {
    let factObject = data.value;
    console.log(factObject)

    let caption = document.querySelector("p");
    caption.innerHTML = factObject
}

/*
button.onclick = function(displayFact) {
    let factObject = data.value;
    console.log(factObject)

    let caption = document.querySelector("p");
    caption.innerHTML = factObject
}
*/

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    .then(displayFact)

    .catch(function (error) {
        console.log("Error during fetch:", error);
    });


