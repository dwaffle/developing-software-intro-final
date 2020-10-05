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

IHouse

### Throws

none

### Output

Outputs a house object to the command line


### Paramaters

name: The name of the customer

### Usage examples

get-house-materials --name Bob

### Returns

IHouse

### Throws

none

### Output

Outputs a house object to the command line.  Zeros are used for filler values.

## Interfaces

IHouse: Defines what a house object should look like for Gerald.  

## Paramaters:

name

Type: string
The name of the customer.

house

Type: object
Contains the width, length, and the calculated areas of the house

materials

Type: object
Contains the total lumber, plywood and drywall needed for the house.

waste

Type: object
Contains the extra lumber, plywood, and drywall purchased to account for waste.

purchase

Type: object
Contains the total lumber, plywood, and drywall to purchase for the house.

## calcWallLumber

Calculates the lumber required for a house.

Paramaters: inches - The length of a side of a house in inches.

### Usage example

calcWallLumber(96)

### Returns
{
    plates:number The number of plates required in a wall of length x
    posts:number The number of posts required in a wall of length x
    studs:number The number of studs required in a wall of length x
}

### Throws

none