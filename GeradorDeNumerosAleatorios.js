num = [0,1,2,3,4,5,6,7,8,9]

let i = num[Math.floor(Math.random()*num.length)]
let n = [i,(i*5),(i*2),(i*4)]

if(n[1]>9)
{
    n[1]=0
}

if(n[2]>9)
{
    n[2]=1
}

if(n[3]>9)
{
    n[3]=0
}

console.log(n)




