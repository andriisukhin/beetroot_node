const stdin = process.stdin;
const stdout = process.stdout;

stdout.write("Enter name, fellow:\n");

// process.argv.forEach((val, index) => {
//     stdout.write(val);
// })

let name = '';

stdin.on('data', function(chunk) {
    stdout.write('Your name is - ' + chunk);
    name = chunk;
    process.exit();
})

process.on('exit', function() {
    stdout.write('Buy, ' + name); //??
})