import { IHouse, IMaterials, IPurchase, IWaste } from "./interfaces";

export function calcPurchase(
  requiredItems: IMaterials,
  waste: IWaste
): IPurchase {
  return {
    purchase: {
      lumber: {
        "2x4":
          requiredItems.materials.lumber["2x4"] + waste.waste.lumber["2x4"],
        "4x4":
          requiredItems.materials.lumber["4x4"] + waste.waste.lumber["4x4"],
      },
      plywood: {
        "4x8":
          requiredItems.materials.plywood["4x8"] + waste.waste.plywood["4x8"],
      },
      drywall: {
        "4x8":
          requiredItems.materials.drywall["4x8"] + waste.waste.drywall["4x8"],
      },
    },
  };
}
