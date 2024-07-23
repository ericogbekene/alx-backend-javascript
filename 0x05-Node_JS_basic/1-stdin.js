process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name? ');
process.stdin.once('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});

process.stdin.on('error', (err) => {
  console.error('An error occurred:', err);
  process.exit(1);
});
