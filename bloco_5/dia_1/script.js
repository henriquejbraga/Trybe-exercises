function mudaTexto() {
  let textonovo = document.getElementsByTagName('p')[1];
  textonovo.innerHTML = 'Me vejo ganhando super bem';
}
mudaTexto();

function mudaCor() {
  let corVerde = document.getElementsByClassName('main-content')[0];
  corVerde.style.background = 'rgb(76,164,109)';
}
mudaCor();

function mudaCor2() {
  let corBranca = document.getElementsByClassName('center-content')[0];
  corBranca.style.background = 'white';
}
mudaCor2();

function corrigeTex() {
  let corrige = document.getElementsByTagName('h1')[0];
  corrige.innerHTML = 'Exercício 5.1 - JavaScript'
}
corrigeTex();

function maiusculo() {
  let maius = document.getElementsByTagName('p')[1];
  maius.innerHTML = maius.innerHTML.toUpperCase();
}
maiusculo();

function exibe() {
  let mostra = document.getElementsByTagName('p');
  for (let i = 0; i < mostra.length; i += 1) {
    console.log(mostra[i].innerHTML);
  }
}
exibe();