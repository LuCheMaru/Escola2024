const nomes = ['Farrapera', 90, 'Dianna', {}]
const jogos = [{
    nome: 'Stardew Valley',
    categoria: 'fazenda'},

    {
    nome:'The binding of Issac',
    categoria:'roguelike'},

    {
    nome:'Terraria',
    categoria: 'ação'},
    
    {
    nome:'Minecraft',
    categoria:'sandbox'}]

//desestruturação
/*const[,nome,...resto] = nomes

console.log(nome)
console.log(resto)*/

//substituir, adicionar e excluir valores
/*nomes[1] = 'UMMETEORO'
nomes.push('Ferdinando')
nomes.pop()
console.log(nomes)*/

//procurando elementos
/*for(let i = 0; i<jogos.length; i++){
    console.log(jogos[i])
}

jogos.forEach(function(jogos){
    console.log(jogos)
})

jogos.forEach(jogos=>{
    console.log(jogos)
})

//Mapeia o array
jogos.map(elements=>{
    console.log(`Meus jogos são: ${elements}`)
})*/

//filtra os elementos
console.log(jogos.filter(elements=>{
    return elements === 'The binding of Issac'
}))

