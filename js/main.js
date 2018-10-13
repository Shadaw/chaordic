let shortUrl = document.querySelectorAll('.shortUrl');
let hits = document.querySelectorAll('.hits');

axios.get('https://raw.githubusercontent.com/chaordic/frontend-intern-challenge/master/Assets/urls.json')
  .then(function(response) {
    for(let i = 0; i <= 4; i++){
      shortUrl[i].innerHTML = response.data[i].shortUrl;
      hits[i].innerHTML = response.data[i].hits;
    }
  })
  .catch(function(error) {
    console.log(error);
  })