import yargs = require('yargs')
import {calcHouseMaterials} from './commands/calc-house-materials'
import {getHouseMaterials} from './commands/get-house-materials'

//The commands to run
calcHouseMaterials(yargs);

getHouseMaterials(yargs);
//Include the --help flag
yargs.help();
//Actually parses the commands.
yargs.parse();
