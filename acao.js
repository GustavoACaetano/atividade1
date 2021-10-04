const nomesComidas = document.querySelectorAll('h2');
const comidas = new Array();
const lista = document.querySelector('ol');

nomesComidas.forEach(nomesComida => {
    comidas.push(nomesComida.textContent)
});

comidas.forEach(comida => {
    const linha = document.createElement('li');
    linha.innerHTML = '<a href="#'+ comida +'">' + comida + '</a>'; //usei innerHTML porque o textContent fazia aparecer tudo escrito ao invés de inserir o código
    lista.append(linha);
});
