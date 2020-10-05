import { areaOfRectangle } from "./shapes/areaOfRectangle";

const drywallLength = 48; //Four feet in inches.
const drywallWidth = 96; //Eight feet in inches.



function getInsideWallsAndCeilingArea(
  lengthInInches: number,
  widthInInches: number
): number {
  //Four walls and the roof need drywall.
  return areaOfRectangle(lengthInInches - 7, (widthInInches - 7) * 5);
}

export function calcDrywall(lengthInInches: number, widthInInches: number) {
  const drywallArea = drywallLength * drywallWidth;
  const totalWallArea = getInsideWallsAndCeilingArea(
    lengthInInches,
    widthInInches
  );
  //One 96 x 48 inch sheet per 4608 inches.
  //Round up because you can't buy half a sheet of drywall.
  return Math.ceil(totalWallArea / drywallArea);
}
