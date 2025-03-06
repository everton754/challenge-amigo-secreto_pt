// Variáveis para armazenar a lista de nomes e o nome sorteado
let nomes = [];
let nomeSorteado = "";

// Função para adicionar nomes à lista
function adicionarAmigo() {
  const nome = document.getElementById("amigo").value.trim();
  const regex = /^[A-ZáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ][a-záéíóúâêîôûãõçÇ ]*$/;

  if (nome !== "" && regex.test(nome)) {
    nomes.push(nome);
    document.getElementById("listaAmigos").innerHTML += `<li>${nome}</li>`;
    document.getElementById("amigo").value = "";
  } else {
    alert(
      "Por favor, insira um nome válido! (Apenas letras e acentos são permitidos, a primeira letra precisa ser maiúscula.)"
    );
  }
}

// Função para sortear um nome aleatório
function sortearAmigo() {
  if (nomes.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    nomeSorteado = nomes[indiceSorteado];
    document.getElementById(
      "resultado"
    ).innerHTML = `<li>O amigo secreto é: ${nomeSorteado}</li>`;
  } else {
    alert("Não há nomes na lista para sortear!");
  }
}
