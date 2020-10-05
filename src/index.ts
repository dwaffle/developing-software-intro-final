import yargs = require('yargs')
import {calc_house_materials} from './commands/calc-house-materials'
import {get_house_materials} from './commands/get-house-materials'
import {testCalcWallLumber} from './commands/calc-house-materials'

//The commands to run
calc_house_materials(yargs);

get_house_materials(yargs);

testCalcWallLumber(yargs);
//Include the --help flag
yargs.help();
//Actually parses the commands.
yargs.parse();
