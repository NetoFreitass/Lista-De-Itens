//Variáveis dos elementos da lista

//Atribuindo o formulário a uma variável
const form = document.getElementById('addForm')
//Atribuir a lista a uma variável 
const itemlist = document.getElementById('Items')
//Atribuição da barra de pesquisa 
const filter = document.getElementById('filter')

form.addEventListener('submit', additem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup', buscaritems);

function buscaritems() {
    alert ('tecla ativa');
}

function removeItem() {
    alert ('clicou na UL');
}

function additem() {
    /* alert('você clicou') */
}