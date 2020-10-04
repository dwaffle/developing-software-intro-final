import yargs = require('yargs')
import {calc_House_Materials} from './commands/calc-house-materials'
import {get_House_Materials} from './commands/get-house-materials'

//The commands to run
calc_House_Materials(yargs);

get_House_Materials(yargs);
//Include the --help flag
yargs.help();
//Actually parses the commands.
yargs.parse();
