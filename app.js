// Variáveis para armazenar a lista de nomes e o nome sorteado
let nomes = [];
let nomeSorteado = "";

// Função para adicionar nomes à lista
function adicionarAmigo() {
  const nome = document.getElementById("amigo").value.trim();
  const regex = /^[A-ZáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ][a-záéíóúâêîôûãõçÇ ]*$/;

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (!regex.test(nome)) {
    alert(
      "Por favor, insira um nome válido! (Apenas letras e acentos são permitidos, a primeira letra precisa ser maiúscula.)"
    );
    return;
  }

  nomes.push(nome);
  atualizarListaAmigos();
  document.getElementById("amigo").value = "";
}

function atualizarListaAmigos() {
  // Obter o elemento da lista
  let lista = document.getElementById("listaAmigos");

  // Limpar a lista existente
  lista.innerHTML = "";

  // Percorrer o array
  for (let i = 0; i < nomes.length; i++) {
    // Adicionar elementos à lista
    let item = document.createElement("li");
    item.textContent = nomes[i];
    lista.appendChild(item);
  }
}

// Função para sortear um nome aleatório
function sortearAmigo() {
  if (nomes.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    nomeSorteado = nomes[indiceSorteado];
    document.getElementById(
      "resultado"
    ).innerHTML = `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;
  } else {
    alert("Não há nomes na lista para sortear!");
  }
}
