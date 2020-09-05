const url =
  'https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating';
const content = document.querySelector('.content');

function fetchData() {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => handleData(data.results));
  } catch (error) {
    console.error('there was an error >:[');
  }
}

function handleData(data) {
  let name;
  let released;
  let rating;
  let id;

  for (let i = 0; i < data.length; i++) {
    let game = data[i];
    name = game.name;
    released = game.released;
    rating = game.rating;
    id = game.id;

    createHTML(name, released, rating, id);
  }
}

function createHTML(name, released, rating, id) {
  content.innerHTML += `<div class="game">
    <a href="./question3.html?id=${id}">Title: ${name}</a>
    <p>Release Date: ${released}</p>
    <p>Rating: ${rating}</p>
  </div>`;
}

fetchData();
