export function calcWaste(items: number): number {
  return Math.ceil(items * 0.1); //One tenth of the items, rounded up.
}
