let postsArea = document.querySelector('#posts-area');

function convertResponse(response) {
  let data = [];
  for (let key in response) {
    data.push(response[key]);
  }
  return data;
}

function createCard(data) {
  var cardWrapper = document.createElement('div');
  cardWrapper.className = 'post-card mdl-card mdl-shadow--2dp';

  var cardTitle = document.createElement('div');
  cardTitle.className = 'mdl-card__title';
  cardTitle.style.backgroundImage =
    'url("https://dbwgapw6amg93.cloudfront.net/wp-content/uploads/2016/06/Hero-10-Unexpectedly-Insightful-TED-Talks-for-Designers.jpg")';
  cardTitle.style.backgroundSize = 'cover';
  cardTitle.style.height = '140px';
  cardWrapper.appendChild(cardTitle);

  var cardTitleTextElement = document.createElement('h2');
  cardTitleTextElement.className = 'mdl-card__title-text';
  cardTitleTextElement.style.color = 'white';
  cardTitleTextElement.textContent = data.name;
  cardTitle.appendChild(cardTitleTextElement);

  var cardSupportingText = document.createElement('div');
  cardSupportingText.className = 'mdl-card__supporting-text';
  cardSupportingText.textContent = data.speaker;

  cardWrapper.appendChild(cardSupportingText);
  postsArea.appendChild(cardWrapper);
}

const url = 'https://senai-talks.firebaseio.com/posts.json';

fetch(url)
  .then((response) => response.json())
  .then(json => {
    let data = convertResponse(json);
    for (let item of data) {
      createCard(item);
    }
  })
  .catch((err) => {
    console.log(err);
  });
