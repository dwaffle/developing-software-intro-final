import { areaOfRectangle } from "./shapes/areaOfRectangle";

const drywallLength = 48; //Four feet in inches.
const drywallWidth = 96; //Eight feet in inches.

export function calcDrywall(lengthInInches: number, widthInInches: number) {
  const totalArea = areaOfRectangle(lengthInInches, widthInInches);
  const drywallArea = areaOfRectangle(drywallLength, drywallWidth);
  return Math.ceil(totalArea / drywallArea);
}
