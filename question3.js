const title = document.querySelector('.title');
const image = document.querySelector('.image');
const description = document.querySelector('.description');
const rating = document.querySelector('.rating');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

url = `https://api.rawg.io/api/games/${id}`;

function writeHTML(data) {
  title.innerHTML += data.name;
  image.innerHTML += `<img src="${data.background_image}">`;
  description.innerHTML += data.description;
  rating.innerHTML += 'Rating: ' + data.rating;
}

function fetchData() {
  try {
    fetch(url).then((response) =>
      response.json().then((data) => writeHTML(data))
    );
  } catch (error) {
    console.log('oopsie :(');
  }
}

fetchData();
