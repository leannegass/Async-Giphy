require('dotenv').config();
const fetch = require('isomorphic-fetch');

//const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;


// Print out value of API key stored in .env file

async function getImage(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

    const response = await fetch(endpoint);
    const data = await response.json();
    //const newd = await JSON.parse(data.data)
    const firstURL = data.data[0].url
    
    console.log(firstURL);
    return data;
}
getImage("cats");