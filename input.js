const readline = require("readline");
const prompt = require("prompt-sync")();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, // Use process.stdout for output
});

// rl.question("What is your name? ", (name) => {
//     console.log(`Hi ${name}`);
//     rl.close();
// });

const name = prompt("What is your name?");
console.log(name);