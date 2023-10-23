// console.log(process.argv);

const minimist = require("minimist");

// process.env.array.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

const argNew = minimist(process.argv.slice(2));
console.log(argNew.name);   