alert("Bem-vindo ao Seu Pesadelo😄");
function mostrarMensagem() {
  alert("VOCÊ FOI HACKEADO 🚀");
}
function mudarTexto() {
  document.getElementById("texto").innerText =
    "ABRIU O LINK CURIOSO 😎🔥";
}
function mostrarNome() {
  let nome = document.getElementById("nome").value;

  if (nome.trim() === "") {
    document.getElementById("resposta").innerText =
      " NÃO SABE LER ? COLOCA O NOME!😎 ";
  } else {
    document.getElementById("resposta").innerText =
      "Prazer, " + nome + "! Você É MAIS UM BOBO👏";
  }
}

