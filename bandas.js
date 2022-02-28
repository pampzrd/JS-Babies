//random das bandas

let bandas = 
[
    'Paramore',
    'Ashes to New',
    'Evanescence',
    'YOHIO',
    'My Chemical Romance',
    'Fresno',
    'Glória',
    'Shaman',
    'Angra',
    'Nightwish',
    'Dead by April'

]

bandas.push('Girugamesh')
//let random = bandas [Math.floor(Math.random()*bandas.length)] 
//uma variável vai receber o código random. Recebe a Array que quer embaralhar
//A  Função .Math.floor() força o número sorteado a ser inteiro.
//A Função Math.random() sorteia
//Para transformar as posições em números sorteáveis, pega a qtd de itens na array 
//console.log(bandas)

let _random = bandas [Math.floor(Math.random()*bandas.length)] 
console.log(_random)


