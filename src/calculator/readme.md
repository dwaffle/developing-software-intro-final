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

RangeError - walls need to be between 48 and 720 inches, inclusive.

### Output

Outputs a house object to the command line

---

## get-house-materials

### Paramaters

name: The name of the customer

### Usage examples

get-house-materials --name Bob

### Returns

IHouse

### Throws

FileNotFoundError: "There is no house by that name" - Thrown when attempting to retrieve a house that doesn't exist.

### Output

Outputs a house object loaded from memory to the command line. 

### Interfaces

IHouse: Defines what a house object should look like for Gerald.
IMaterials: Defines the materials required not counting waste.
IWaste: Defines the extra materials needed due to waste.
IPurchase: Defines the total purchase required.  

### Paramaters:

name

Type: string
The name of the customer.

house

Type: object
Contains the width, length, and the calculated areas of the house

materials

Type: IMaterials
Contains the total lumber, plywood and drywall needed for the house.

waste

Type: IWaste
Contains the extra lumber, plywood, and drywall purchased to account for waste.

purchase

Type: IPurchase
Contains the total lumber, plywood, and drywall to purchase for the house.

--- 

## calcWallLumber

Calculates the lumber required for a house.

Paramaters: inches - The length of a side of a house in inches.

### Usage example

calcWallLumber(96)

### Returns
```
{
    
    plates:number The number of plates required in a wall of length x
    
    posts:number The number of posts required in a wall of length x
    
    studs:number The number of studs required in a wall of length x
}
```
### Throws

none

## areaOfRectangle

Returns the area of a rectangle of length l and width w.

### Paramaters

length: the length of a side of the rectangle

width: the width of a side of the rectangle

### Returns

number: length * width - the total area of a rectangle.

### Throws

none

---

## calcPlywood

Returns the number of sheets of plywood needed to cover a wall of width x and length y

### Paramaters

length: The length a side of the house.

width: The width of a side of the house.

### Returns

number: The number of sheets of plywood needed to cover the area of the house, rounded up.

### Throws

none

## calcMaterials

Returns the materials required for a house.

### Paramaters

drywallCalc: function(width:number, length:number):number

plywoodCalc: function(width:number, length:number):number

wallLumberCalc: (inches:number) => any

width:number,

length:number

drywallCalc: a function that takes a width of a house, length of a house, and returns a number.

plywoodCalc: a function that takes the width of a house, length of a house, and returns a number.

wallLumberCalc: takes a wall length in inches and returns an object containing the number of posts, plates and studs required for the walls of the house.

width: the width of the house

length: the length of the house.

### Throws

none

### Returns

IMaterials: An object containing the materials required for a house.

### Sample output
```
{
    materials: {
        lumber: {
            "2x4": 40
            "4x4: 4
        },
        plywood: {
            "4x8": 9
        },
        drywall: {
            "4x8": drywall
        }
    }
}
```

---

## calcWaste

Calculates the waste materials for a house, ten percent rounded up.

### Usage

calcWaste(34) //Returns 4

### Throws

none

### Returns

number: The number of items that need to be purchased to cover waste.