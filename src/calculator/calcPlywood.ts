import { areaOfRectangle } from "./shapes/areaOfRectangle";

const plywoodLength = 96;
const plywoodWidth = 48;
const boardHeight = 96;

export function outsideWallCalc(lengthInInches: number): number {
  //Assumption: Gerald's houses are eight feet (one board) tall.
  return areaOfRectangle(lengthInInches, boardHeight) * 2;
}

export function calcPlywood(
  widthInInches: number,
  lengthInInches: number
): number {
  //Total outside area of the house.
  const outsideAreaOfHouse =
    outsideWallCalc(lengthInInches) + outsideWallCalc(widthInInches);
  const plywoodArea = plywoodLength * plywoodWidth;
  //Round up because we need to buy whole sheets of plywood.
  return Math.ceil(outsideAreaOfHouse / plywoodArea);
}
