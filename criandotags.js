//Praticando a separar a array para imprimir tags. (Como no tumblr?)
 const hobby = 
[
    'Dança,Canto,Futebol,Basquete,Skate,Desenho,TV,Ouvir Música'
] 

const s = '#'

    hobby = hobby.split(',')
 /*        hobby.forEachLine(+s); //como faz para adicionar #? */



console.log(s + hobby);
