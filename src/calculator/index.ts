import { IHouse } from "./interfaces";
import { calcDrywall } from "../calculator/calcDrywall";
import { calcPlywood } from "../calculator/calcPlywood";
import { calcMaterials } from "../calculator/calcMaterials";
import { getInsideWallsAndCeilingArea } from "../calculator/calcDrywall";
import { calcWaste } from "./calcWaste";
import { calcPurchase } from "./calcPurchase";
import { outsideWallCalc } from "../calculator/calcPlywood";
import { calcWallLumber } from "./calcWallLumber";

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

  const totalPurchase = calcPurchase(houseMaterials, waste);

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
  return house;
}

export function getHouseMaterials(name: string): IHouse {
  const house: IHouse = {
    name: name,
    house: {
      width: 0,
      length: 0,
      outsideWallArea: 0,
      insideWallArea: 0,
      ceilingArea: 0,
    },
    materials: {
      lumber: {
        "2x4": 0,
        "4x4": 0,
      },
      plywood: {
        "4x8": 0,
      },
      drywall: {
        "4x8": 0,
      },
    },
    waste: {
      lumber: {
        "2x4": 0,
        "4x4": 0,
      },
      plywood: {
        "4x8": 0,
      },
      drywall: {
        "4x8": 0,
      },
    },
    purchase: {
      lumber: {
        "2x4": 0,
        "4x4": 0,
      },
      plywood: {
        "4x8": 0,
      },
      drywall: {
        "4x8": 0,
      },
    },
  };
  return house;
}
