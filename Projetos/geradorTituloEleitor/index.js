document.getElementById('gerarButton').addEventListener('click', function() {
    const uf = document.getElementById('uf').value;
    const numero = Math.floor(Math.random() * 100000000000).toString().padStart(12, '0');
    const tituloGerado = `${uf}-${numero}`;
  
    document.getElementById('tituloGerado').textContent = `Título Gerado: ${tituloGerado}`;
});