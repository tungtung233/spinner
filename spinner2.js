const spinner = '|/-\\|/-\\|/-\\'

let x = 0;

for (const character of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, x);
  x += 200
}


