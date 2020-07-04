const fs = require('fs');

console.log('=== Begin sync red ===');
const content = fs.readFileSync('./readme.md')
console.log(content.toString());
console.log('=== End sync red ===');

console.log('=== Begin async sync red ===');
fs.readFile('./readme.md', (error, content) => {
    if(error) throw error;
    console.log(content.toString());
})
console.log('=== End async sync red ===');

console.log('=== Done ===');