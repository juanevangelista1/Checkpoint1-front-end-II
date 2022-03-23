// recebe elemento formulario
const form = document.querySelector("#form");

// recebe container onde serao adicionados os cards
const containerCards = document.querySelector("#container-cards");

// lista que ira receber os objetos cards
var cards = [];

// funcao que cria o template e adiciona o card ao container
const addCard = function (nome, descricao, url) {
  const template = `
    <div class="card">
       <img src="${url}" alt="${nome}" >
       <h1 class="heroName">${nome}</h1>
       <p class="description">${descricao}</p>
     </div>
    `;

  containerCards.innerHTML += template;
};

// event onsubmit - ao clicar botao de add imagens
form.onsubmit = function (event) {
  var nome = document.querySelector("#nome").value;
  var descricao = document.querySelector("#descricao").value;
  var url = document.querySelector("#url").value;

  // criar o card ao clicar em submit
  var card = {
    nome: nome,
    descricao: descricao,
    url: url,
  };

  // adicionar o card à lista cards
  cards.push(card);

  // executa funcao que add o card ao DOM
  addCard(nome, descricao, url);

  //Limpa os campos após o carregamento do card
  nome = document.querySelector("#nome").value = "";
  descricao = document.querySelector("#descricao").value = "";
  url = document.querySelector("#url").value = "";

  event.preventDefault();
};
