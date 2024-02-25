const compiler = require('./compiler');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('==================================================================');
console.log('            Lisp to JavaScript compiler CLI Tool.                 ');
console.log('                                                                  ');
console.log('------------------------------------------------------------------');
console.log('                                         Made by: Satvik Sharma xD');
console.log('==================================================================');


rl.question('Enter the Lisp expression: ', (input) => {
    try {
        const output = compiler(input.trim());
        console.log('\nCompiled JavaScript code:');
        console.log(output);
      } catch (error) {
        console.error('Error compiling the Lisp expression:', error.message);
      } finally {
        rl.close();
      }
});
