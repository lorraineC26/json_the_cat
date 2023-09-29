// fetch breed details from web
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback('Breed name is not found', null);
    } else {
      // console.log(typeof body); ==> string
      const data = JSON.parse(body);
      // console.log(typeof body); ==> array
      // console.log(`Here's the description of ${breed}:\n`, data[0]);

      callback(null, data[0]['description']); // use callback to return data for async
    }
  });
};

module.exports = { fetchBreedDescription };
