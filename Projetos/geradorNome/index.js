const nomes = ["Alice", "Bruno", "Clara", "Daniel", "Eva", "Fernando", "Gabriela", "Hugo", "Isabela", "João"];

function gerarNome() {
    const nomeRandom = Math.floor(Math.random() * nomes.length);
    document.getElementById("nomeGerado").textContent = nomes[nomeRandom];
}