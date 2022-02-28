/* const input = prompt("What's your name?");
alert(`Your name is ${input}`);
 */
/* 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (answer) {
  console.log(`Oh, so your name is ${answer}`);
  console.log("Closing the interface");
  rl.close();
});
 */

/* const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  }); */
  
 // response = readline()
 /* const io = require('console-read-write');

 async function main() {
   // Simple readline scenario
   io.write('I will echo whatever you write!');
   io.write(await io.read());
 
   // Simple question scenario
   io.write(`hello ${await io.ask('Who are you?')}!`);
 
   // Since you are not blocking the IO, you can go wild with while loops!
   let saidHi = false;
   while (!saidHi) {
     io.write('Say hi or I will repeat...');
     saidHi = await io.read() === 'hi';
   }
 
   io.write('Thanks! Now you may leave.');
 }
 
 main();
 // I will echo whatever you write!
 // > ok
 // ok
 // Who are you? someone
 // hello someone!
 // Say hi or I will repeat...
 // > no
 // Say hi or I will repeat...
 // > ok
 // Say hi or I will repeat...
 // > hi
 // Thanks! Now you may leave.
  */
recebe = function prompt(){
    console.log(`Hey there ${recebe}!`);
    recebe();
}
