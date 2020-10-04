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

Outputs the arguments to the command line, along with a message indicating the function in calculator/index.ts was successfully called.