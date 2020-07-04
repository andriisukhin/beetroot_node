const stdout = process.stdout;
const t = 3000;
const interval = 100;
let current = 0;
let percent = 0;

function  print(percent) { // ??
    stdout.clearLine();
    stdout.cursorTo(0);
    stdout.write(`Loading ... ${percent}%`);
}

setInterval( () => {
    current += interval;
    percent = Math.floor(current / t * 100)
    print(percent);
}, interval);

setTimeout(() => {
    print(100);
    stdout.write(`\nDone\n`)
    process.exit();
}, t);