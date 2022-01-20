/* //Trocar o valor da variável a pela de b e de b pela de a
//primeira forma  1

let a = 7;
let b = 94;

console.log("valor de a é="+a+" e "+"valor de b é ="+b);

a = 94;
b = 7;
console.log("atualizado o valor de a é ="+a+" e "+"valor de b é ="+b);


//Segunda forma (que deu errado);A;  XXXXXX
a=7;
b=94;
console.log("valor de a é="+a+" e "+"valor de b é ="+b);
a=b;
b=a;
console.log("atualizado o valor de a é ="+a+" e "+"valor de b é ="+b);
 */


//Forma do professor: criar a variável temporária "caixinha de guardar coisas"  2

a = 7;
let temp = a; 
b = 94;

/* a = b;
b = temp;

console.log("O valor de a é="+a+"O valor de b é="+b) */

//Forma de matriz 3
[a,b] = [b,a]
console.log("O valor de a é="+a+"O valor de b é="+b)