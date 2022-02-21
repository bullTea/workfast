#!/usr/bin/env node
import program from 'commander';
import GitLabSource from './git';
program
  .version('1.0.0')
  .option('-e, --end', 'option')
  .command('end [cmd]')
  .description('run the given remote command')
  .action((cmd) => {
    if (cmd === 'end') {
      console.log('option end');
      const gitMr = new GitLabSource({
        token: 'xvTh3o4Va_BZrqcxPzKH',
      });
      gitMr.getBranches();
    }
  })
  .parse(process.argv);

if (program.end) {
  console.log('option end');
  const gitMr = new GitLabSource({
    token: 'xvTh3o4Va_BZrqcxPzKH',
  });
  gitMr.getBranches();
}
