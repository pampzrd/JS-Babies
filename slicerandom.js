cores=
[
    "vermelho",
    "verde",
    "azul",
    "amarelo",
    "marrom",
    "preto",
]

/* function getRandomArbitrary(min,max) {
    return Math.random() * (max-min) + min;
}
C = cores.sort()
console.log(C)
 */

// QUANTIDADE DE ELEMENTOS NA ARRAY
console.log(cores.length)

//ADICIONA ÚLTIMO NA ARRAY        PUSH
cores.push("Branco")

console.log(cores)

//TIRA O ÚLTIMO ITEM DA ARRAY       POP
cores.pop("Branco")

console.log(cores)

//TIRA DO COMEÇO DA ARRAY     SHIFT

cores.shift("laranja")

console.log(cores)

// ADICIONA NO COMEÇO DA ARRAY     UNSHIFT

cores.unshift("Esmeralda")

console.log(cores)

//=======================
num = [1,2,3,4,5,6]
//Como no python
console.log("Array: ", num)
console.log(".slice (-2) Corta toda a array e mostra só os dois últimos valores da array ", num.slice(-2))
console.log(".slice (2) Corta os dois últimos valores da array ", num.slice(2))
//========================
