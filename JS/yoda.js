const txt_entrada = document.querySelector(".txt_entrada");
//Variavel de texto de entrada.

const traduz = document.querySelector(".traduz");
//Variavel de tradução.

const resposta = document.querySelector(".resposta");
//Variavel de resposta para lingua do yoda.

const limpar = document.querySelector(".limpar");
//Variavel limpar a caixa de texto.

traduz.addEventListener("click", traducao);
//Evento de click para traduzir as palavras.
limpar.addEventListener("click", clean);
//Evento de click para limpar as caixas de texto.

function clean(){

  document.querySelector(".txt_entrada").value="";
  //função para limpar a caixa de texto.
  
}

let url = "https://api.funtranslations.com/translate/yoda.json"
//URL da API

async function traducao() {
  //função async para tradução do texto.

  const result = await fetch(`https://api.funtranslations.com/translate/yoda.json?text=${txt_entrada.value}`)
  //Variavel do resultado da tradução. 
  //obs: await so funcionará se estiver dentro da função async.
  
  .then(response=> response.json())
  //Buscando os dados e transformando em Json.

  .then(response=>response.contents.translated)
  //Passando para o proximo metodo .then
  .catch(alert=("Error!"));
  //Caso exista erro, aparecerá um alerta.

  console.log(result);
  //log do resultado.

  resposta.innerHTML = result; 
  //Reposta do yoda.
}