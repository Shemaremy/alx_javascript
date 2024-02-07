const request = require('request');

const movie_id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movie_id}`

request.get(url, function (error, response, body){
    const films = JSON.parse(body);
    films.characters.forEach((characterUrl) => {
        request(characterUrl, (error, response, body)=>{
            const character = JSON.parse(body);
            console.log(character.name);
        })
    });

})


