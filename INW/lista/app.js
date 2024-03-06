const btn1= document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click', ()=>{
    //pega o valor do input
    const campoUsuario = document.querySelector('#filmeInput').value
    //cria um novo li
    const itemLista = document.createElement('li')
    //adiciona item a lista
    listaFilmes.append(itemLista)
    //adiciona conteúdo à lista
    itemLista.innerHTML = `<strong>${campoUsuario}</strong>`
    //muda o estilo
    itemLista.style.backgroundColor = 'red'
    //adiciona uma classe
    itemLista.classList.add('ativo')
    //liga/desliga uma class
    itemLista.classList.toggle('ativo')
})

//window.onload - quando a página carregar, faça...