const shell = require('shelljs');
const exec = shell.exec;

console.log(process.argv, '00');

console.log(exec('git branch').code);
// console.log(shell.echo('git branch'))

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
  shell;
}

if (exec('git add .').code !== 0) {
  shell.echo('Error: Git add failed');
  shell.exit(1);
}
