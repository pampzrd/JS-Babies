//Executar o código com Prompt e Alert no navegador
//no VSCode não roda
var lol = prompt("Digite...	")
if(lol.length<=5){
  alert("Digite denovo!")
  lol1 = prompt("Digite algo mais longo...	")
  console.log(lol1)
}else{
console.log(lol)
}
//Testado no navegador: Funcional.