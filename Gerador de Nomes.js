nomeFem=["Lana","Ana","Paula","Joana","Augusta","Marinna"]
nomeMasc=["Bruno","Pedro","Danilo","Marcelo","Henrique"]
sobrenome=["Rodrigues","de Campos","Pires Cavalcante","Carvalho","Moraes","da Silva"]

nF=nomeFem[Math.floor(Math.random()*nomeFem.length)]
nM=nomeMasc[Math.floor(Math.random()*nomeMasc.length)]
s=sobrenome[Math.floor(Math.random()*sobrenome.length)]
s1=sobrenome[Math.floor(Math.random()*sobrenome.length)]
//como nao ficar tao previsivel o random?
console.log(nF+" "+s)
console.log(nM+" "+s1)