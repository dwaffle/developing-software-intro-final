import { IHouse } from "./interfaces";
import { calcDrywall } from "../calculator/calcDrywall";
import { calcPlywood } from "../calculator/calcPlywood";
import { calcMaterials } from "../calculator/calcMaterials";
import { getInsideWallsAndCeilingArea } from "../calculator/calcDrywall";
import { calcWaste } from "./calcWaste";
import { calcPurchase } from "./calcPurchase";
import { outsideWallCalc } from "../calculator/calcPlywood";
import { calcWallLumber } from "./calcWallLumber";
import fs = require("fs");

export function convertFeetToInches(feet: number) {
  return feet * 12;
}

export function calcHouseMaterials(
  name: string,
  width: number,
  length: number,
  units: boolean
): IHouse {
  if (units) {
    width = convertFeetToInches(width);
    length = convertFeetToInches(length);
  }
  if (!name) {
    name = "Testy McTesterson"; //Supply a default name so the calculator can still be used as just a calculator.
  }

  if (width < 48 || width > 720 || length < 48 || length > 720) {
    throw RangeError(
      "Houses cannot be smaller than 48 inches or greater than 720 inches."
    );
  }
  const houseMaterials = calcMaterials(
    calcDrywall,
    calcPlywood,
    calcWallLumber,
    width,
    length
  );
  //Figure out our waste
  const waste = {
    waste: {
      lumber: {
        "2x4": calcWaste(houseMaterials.materials.lumber["2x4"]),
        "4x4": calcWaste(houseMaterials.materials.lumber["4x4"]),
      },
      plywood: {
        "4x8": calcWaste(houseMaterials.materials.plywood["4x8"]),
      },
      drywall: {
        "4x8": calcWaste(houseMaterials.materials.drywall["4x8"]),
      },
    },
  };
  //Our grand total.
  const totalPurchase = calcPurchase(houseMaterials, waste);
  //Load the data into the house.
  const house: IHouse = {
    name: name,
    house: {
      width: width,
      length: length,
      outsideWallArea: outsideWallCalc(length + width),
      insideWallArea: getInsideWallsAndCeilingArea(length, width) * 4,
      ceilingArea: getInsideWallsAndCeilingArea(length, width),
    },
    materials: {
      lumber: {
        "2x4": houseMaterials.materials.lumber["2x4"],
        "4x4": houseMaterials.materials.lumber["4x4"],
      },
      plywood: {
        "4x8": houseMaterials.materials.plywood["4x8"],
      },
      drywall: {
        "4x8": houseMaterials.materials.drywall["4x8"],
      },
    },
    waste: {
      lumber: {
        "2x4": waste.waste.lumber["2x4"],
        "4x4": waste.waste.lumber["4x4"],
      },
      plywood: {
        "4x8": waste.waste.plywood["4x8"],
      },
      drywall: {
        "4x8": waste.waste.drywall["4x8"],
      },
    },
    purchase: {
      lumber: {
        "2x4": totalPurchase.purchase.lumber["2x4"],
        "4x4": totalPurchase.purchase.lumber["4x4"],
      },
      plywood: {
        "4x8": totalPurchase.purchase.plywood["4x8"],
      },
      drywall: {
        "4x8": totalPurchase.purchase.drywall["4x8"],
      },
    },
  };
  //Save the data.
  const path = `dist/data/${house.name}.json`;
  if (!fs.existsSync("dist/data/")) {
    fs.mkdirSync("dist/data/"); //Intentionally left untested to not delete existing data.
  }
  const data = JSON.stringify(house);
  fs.writeFileSync(path, data, "utf8");
  //Send the data back to the caller.
  return house;
}

export function getHouseMaterials(name: string): IHouse {
  //Check to see if the file exists. If so, load it.
  if (!fs.existsSync(`dist/data/${name}.json`)) {
    throw new Error("There is no house by that name.");
  }
  //We've found a house.  Load it, send it back to be output.
  const path = `dist/data/${name}.json`;
  const rawHouses = fs.readFileSync(path, "utf8");
  const parsedData: IHouse = JSON.parse(rawHouses);
  return parsedData;
}
