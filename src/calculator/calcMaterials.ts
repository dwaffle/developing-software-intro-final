export function calcMaterials(
  drywallCalc: (width: number, length: number) => number,
  plywoodCalc: (width: number, length: number) => number,
  wallLumberCalc: (inches: number) => any,
  width: number,
  length: number
) {
  const wallLumberInLength = wallLumberCalc(length);
  const wallLumberInWidth = wallLumberCalc(width);
  const drywall = drywallCalc(length, width);
  const plywood = plywoodCalc(length, width);
  const materials = {
    materials: {
      lumber: {
        "2x4":
          wallLumberInLength.studs * 2 +
          wallLumberInLength.plates +
          wallLumberInWidth.studs * 2 +
          wallLumberInWidth.plates,
        "4x4": wallLumberInLength.posts + wallLumberInWidth.posts + 4, //Moved the four posts minimum to here.
      },

      plywood: {
        "4x8": plywood,
      },

      drywall: {
        "4x8": drywall,
      },
    },
  };
  return materials;
}
