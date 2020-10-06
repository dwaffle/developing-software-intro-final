import { areaOfRectangle } from "./shapes/areaOfRectangle";

const drywallLength = 48; //Four feet in inches.
const drywallWidth = 96; //Eight feet in inches.

export function getInsideWallsAndCeilingArea(
  lengthInInches: number,
  widthInInches: number
): number {
  return areaOfRectangle(lengthInInches - 7, widthInInches - 7);
}

export function calcDrywall(lengthInInches: number, widthInInches: number) {
  const drywallArea = drywallLength * drywallWidth;
  //Four walls and the ceiling need drywall.
  const totalWallArea =
    getInsideWallsAndCeilingArea(lengthInInches, widthInInches) * 5;
  //One 96 x 48 inch sheet per 4608 inches.
  //Round up because you can't buy half a sheet of drywall.
  return Math.ceil(totalWallArea / drywallArea);
}
