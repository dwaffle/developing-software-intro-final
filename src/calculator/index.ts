import { IHouse } from "./interfaces";
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

  const house: IHouse = {
    name: name,
    house: {
      width: width,
      length: length,
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
