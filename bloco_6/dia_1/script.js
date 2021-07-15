function criaEstado() {
  let estado = document.getElementById('estado');
  let opcoesEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < opcoesEstado.length; index += 1) {
    let criaopcoes = document.createElement('option');
    estado.appendChild(criaopcoes).innerText = opcoesEstado[index];
    estado.appendChild(criaopcoes).value = opcoesEstado[index];
  }
}
criaEstado();
