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
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista existente

  for (let i = 0; i < nomes.length; i++) {
    let item = document.createElement("li");
    item.textContent = nomes[i];
    item.classList.add("list-item"); // Adiciona a classe para animação

    // Cria o botão de remoção
    let btnRemover = document.createElement("button");
    btnRemover.textContent = "X";
    btnRemover.classList.add("btn-remover");

    // Associa o evento de clique para remover o item
    btnRemover.onclick = function () {
      removerAmigo(i, item);
    };

    item.appendChild(btnRemover);
    lista.appendChild(item);
  }
}

// Função para remover o amigo com animação
function removerAmigo(index, item) {
  item.classList.add("remove-animation"); // Adiciona a classe de animação de saída

  // Espera a animação terminar (300ms no CSS) antes de remover o elemento
  setTimeout(() => {
    nomes.splice(index, 1);
    atualizarListaAmigos();
  }, 300);
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
