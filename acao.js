const nomesComidas = document.querySelectorAll('h2');
const comidas = new Array();
const lista = document.querySelector('ol');
const retornarDivs = document.querySelectorAll('div');

nomesComidas.forEach(nomesComida => {
    comidas.push(nomesComida.textContent)
});

comidas.forEach(comida => {
    const linha = document.createElement('li');
    linha.innerHTML = '<a href="#'+ comida +'">' + comida + '</a>'; //usei innerHTML porque o textContent fazia aparecer tudo escrito ao invés de inserir o código
    lista.append(linha);
});

retornarDivs.forEach(retornarDiv => {
    retornarDiv.innerHTML = '<a href="#lista">Retornar</a>';
});
