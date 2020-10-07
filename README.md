# Final Assignment

### Setup

- Made package a Typescript project, added compile, start, and compile & start scripts.

- Added .gitignore file

- Added linting and scripts to lint, and lint and run.
- Added code formatting using Prettier.
- Added testing using mocha and chai.
- Added nyc for test coverage

Added yargs commands calc-house-materials and get-house-materials.

## calc-house-materials

### Paramaters

name: The name of the customer.  Will supply the default name "Testy McTesterson" if you wish to use just the calculator.
width: The width of the house (defaults to inches)
length: The length of the house (defaults to inches)
isFeet: Changes the paramters of the length and width to feet.

### Usage examples

calc-house-materials --name Bob --width 8 --length 8 --isFeet
calc-house-materials --name Jim --width 96 --length 96
calc-house-materials --name William --width 103 --length 103


### Output

Outputs a house object to the command line, along with the number of each item to purchase, the amount to purchase to cover waste, and the total purchase.

## get-house-materials

### Paramaters

name: The name of the customer

### Usage examples

get-house-materials --name Bob //Retrieves the house with the name "Bob"

### Throws

Error("There is no house by that name.") - you attempted to retrieve a non-existant house.

### Output

Outputs a house object loaded from memory to the command line.