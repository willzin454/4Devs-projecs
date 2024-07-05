document.getElementById('gerarButton').addEventListener('click', function() {
    const estado = document.getElementById('estado').value;
    const numero = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    const rgGerado = `${estado}-${numero}`;
  
    document.getElementById('rgGerado').textContent = `RG Gerado: ${rgGerado}`;
});