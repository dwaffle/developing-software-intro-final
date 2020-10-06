export interface IMaterials {
  materials: {
    lumber: {
      "2x4": number;
      "4x4": number;
    };
    plywood: {
      "4x8": number;
    };
    drywall: {
      "4x8": number;
    };
  };
}

export interface IWaste {
  waste: {
    lumber: {
      "2x4": number;
      "4x4": number;
    };
    plywood: {
      "4x8": number;
    };
    drywall: {
      "4x8": number;
    };
  };
}

export interface IPurchase {
  purchase: {
    lumber: {
      "2x4": number;
      "4x4": number;
    };
    plywood: {
      "4x8": number;
    };
    drywall: {
      "4x8": number;
    };
  };
}

export interface IHouse extends IWaste, IMaterials, IPurchase {
  name: string;
  house: {
    width: number;
    length: number;
    outsideWallArea: number;
    insideWallArea: number;
    ceilingArea: number;
  };
}
