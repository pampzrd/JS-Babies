//Tipagem fraca JAVASCRIPT VANILLA  - Baunilha

//#### Declarando variáveis ####
// inteiro
aIn=4;  
// float
bFl=4.5;
// double
cDo=4.678;

dFl=6.7;

eFl=8.3;

//#### Casting de variáveis ####
cDo.toString(); //para uma String
toString(10); //Transforma em String

true.toString(); //Transforma o boolean em String
toString(false);

String(null) //"null"
String(undefined) //"undefined"
String(NaN) //"NaN"

Number("1"); //Convertendo Strings para números
Number(""); //0
Number("12.5");

//Formas de arredondar para inteiros
a= Math.floor(bFl);  // 4.5--> 4  baixo
b= Math.ceil(cDo);  // 4.678 --> 5 cima
c= Math.round(dFl);  // 6.7 --> 7 cima
d= Math.trunc(eFl); // 8.3 --> 8 baixo


//De Inteiros para Float
f=(4).toFixed(2); //Só edita as casas decimais a serem exibidas.

//#### Criando funções ####


//#### Chamando funções ####


//#### Array ####

personagem=["Zeca-Urubu","Leôncio","Andy Panda"];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);