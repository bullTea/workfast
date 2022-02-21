const {program} =require('commander');

program
 .option('-d, --debug', 'output extra debugging')
 .option('-s, --small', 'small pizza size')
 .option('-p, --pizza-type <type>', 'flavour of pizza')
 .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program.parse(process.argv);
// console.log(`cheese: ${program.cheese}`);
console.log(program.opts())
if (program.debug) console.log(program.opts());
// console.log(program.args, 'program.args', program.argv, );
// if (program.small) console.log('- small pizza size');
// if (program.pizzaType) console.log(`- ${program.pizzaType}`);