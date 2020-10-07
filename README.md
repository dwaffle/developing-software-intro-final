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
isFeet: Changes the paramaters of the length and width to feet.

### Usage examples

npm run start -- calc-house-materials --name Bob --width 8 --length 8 --isFeet

npm run start -- calc-house-materials --name Jimmy --width 96 --length 60

npm run start -- calc-house-materials --name William --width 103 --length 103


### Output

Outputs a house object to the command line, along with the number of each item to purchase, the amount to purchase to cover waste, and the total purchase.

Example

```
npm run start -- calc-house-materials --name Jimmy --width 96 --length 60

{
  name: 'Jimmy',
  house: {
    width: 96,
    length: 60,
    outsideWallArea: 29952,
    insideWallArea: 18868,
    ceilingArea: 4717
  },
  materials: {
    lumber: { '2x4': 28, '4x4': 4 },
    plywood: { '4x8': 7 },
    drywall: { '4x8': 6 }
  },
  waste: {
    lumber: { '2x4': 3, '4x4': 1 },
    plywood: { '4x8': 1 },
    drywall: { '4x8': 1 }
  },
  purchase: {
    lumber: { '2x4': 31, '4x4': 5 },
    plywood: { '4x8': 8 },
    drywall: { '4x8': 7 }
  }
}
```

## get-house-materials

### Paramaters

name: The name of the customer

### Usage examples

npm run start -- get-house-materials --name Bob //Retrieves the house with the name "Bob"

### Throws

Error("There is no house by that name.") - you attempted to retrieve a non-existant house.

### Output

Outputs a house object loaded from memory to the command line.

Sample:

```
npm run start -- get-house-materials --name Bob

{
  name: 'Bob',
  house: {
    width: 103,
    length: 103,
    outsideWallArea: 39552,
    insideWallArea: 36864,
    ceilingArea: 9216
  },
  materials: {
    lumber: { '2x4': 40, '4x4': 4 },
    plywood: { '4x8': 9 },
    drywall: { '4x8': 10 }
  },
  waste: {
    lumber: { '2x4': 4, '4x4': 1 },
    plywood: { '4x8': 1 },
    drywall: { '4x8': 1 }
  },
  purchase: {
    lumber: { '2x4': 44, '4x4': 5 },
    plywood: { '4x8': 10 },
    drywall: { '4x8': 11 }
  }
}
```