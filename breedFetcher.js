// fetch breed details from web
const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (body === '[]') {
    console.log('Error: breed name is not found');
    return;
  }
  // console.log(typeof body); ==> string
  const data = JSON.parse(body);
  // console.log(typeof body); ==> array
  console.log(`Here's the description of ${breed}:\n`, data[0]);

});