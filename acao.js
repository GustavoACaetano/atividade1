const nomesComidas = document.querySelectorAll('h2');
const comidas = new Array();
const lista = document.querySelector('ol');

nomesComidas.forEach(nomesComida => {
    comidas.push(nomesComida.textContent)
});

comidas.forEach(comida => {
    const linha = document.createElement('li');
    linha.innerHTML = '<a href="#'+ comida +'">' + comida + '</a>';
    lista.append(linha);
});

const retornarDiv = document.getElementsByName("retornar")

retornarDiv.forEach(cansei => {
    abc = document.createElement('a')
    abc.innerHTML = '<a href=#lista>Retornar</a>'
    cansei.append(abc)
})
