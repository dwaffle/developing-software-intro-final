import yargs = require('yargs')
import {calc_House_Materials} from './commands/calc-house-materials'
import {getHouseMaterials} from './commands/get-house-materials'

//The commands to run
calc_House_Materials(yargs);

getHouseMaterials(yargs);
//Include the --help flag
yargs.help();
//Actually parses the commands.
yargs.parse();
