let shortUrl = document.querySelectorAll('.shortUrl');
let hits = document.querySelectorAll('.hits');
let input = document.getElementById('header__content--input');
let button = document.getElementsByClassName('header__content--button')[0];
let excluir = document.getElementById('header__content--delete');

function url() {
  return axios.get('https://raw.githubusercontent.com/chaordic/frontend-intern-challenge/master/Assets/urls.json')
}
dados = url()

dados.then(function(response) {
    for(let i = 0; i <= 4; i++){
      shortUrl[i].innerHTML = response.data[i].shortUrl;
      hits[i].innerHTML = response.data[i].hits;
    }
  })
  .catch(function(error) {
    console.log(error);
  })
  
let valor = 0;

button.onclick = function() {
  if (valor % 2 == 0) {
    dados.then(function(response) {
      for(let i = 0; i <= response.data.length; i++){
        if(input.value === response.data[i].url) {
          input.value = response.data[i].shortUrl
        }
      }
    })
    input.classList.add('--copy')
    button.value = 'COPIAR'
    valor ++
  }
  else {
    input.select()
    document.execCommand('copy')
    input.classList.remove('--copy')
    input.value = ''
    button.value = 'ENCURTAR'
    valor ++
  }
  excluir.classList.toggle('disabled');
}

excluir.onclick = function() {
  input.value = ''
  button.value = 'ENCURTAR'
  input.classList.remove('--copy')
  excluir.classList.toggle('disabled');
  valor ++
}