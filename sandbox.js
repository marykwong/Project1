
const form = document.querySelector('form');

const input = document.querySelector("#searchTerm");

// const API_URL = 'http://www.omdbapi.com/?t=${movie}&apikey=b84df3e1';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    // created a var to get the user input
    const searchTerm = input.value;
    console.log(searchTerm);
}

// created a function to get the results from API
// function getResults(searchTerm) {
//     const url = `${API_URL}${searchTerm}`;
//     console.log(searchTerm);


