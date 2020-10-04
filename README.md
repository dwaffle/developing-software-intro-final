# Final Assignment

### Setup

- Made package a Typescript project, added compile, start, and compile & start scripts.

- Added .gitignore file

- Added linting and scripts to lint, and lint and run.g
- Added code formatting using Prettier.
- Added testing using mocha and chai.
- Added nyc for test coverage

Added yargs commands calc-house-materials and get-house-materials.

## calc-house-materials

### Paramaters

name: The name of the customer
width: The width of the house (defaults to inches)
length: The length of the house (defaults to inches)
isFeet: Changes the paramters of the length and width to feet.

### Usage examples

calc-house-materials --name Bob --width 8 --length 8 --isFeet
calc-house-materials --name Jim --width 96 --length 96

### Returns

void

### Throws

none

### Output

Outputs the arguments to the command line.

## get-house-materials

### Paramaters

name: The name of the customer

### Usage examples

get-house-materials --name Bob

### Returns

void

### Throws

none

### Output

Outputs the arguments to the command line in the form of a plain object

