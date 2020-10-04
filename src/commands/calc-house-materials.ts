import { Arguments, Argv, string } from "yargs";
import { calcHouseMaterials } from "../calculator/index";

//Note: not expected to write tests for Yargs.
export function calc_House_Materials(yargs: Argv): void {
  yargs.command(
    //name the command
    "calc-house-materials",
    //Describe the command
    "Calculates the house materials Gerald requires",
    //Define paramaters
    {
      width: {
        type: "number",
        alias: "w",
        description: "The width of the house.  Defaults to inches.",
      },
      length: {
        type: "number",
        alias: "l",
        description: "The length of the house.  Defaults to inches.",
      },
      isFeet: {
        type: "boolean",
        alias: "f",
        description: "Are the paramaters passed in feet instead of inches?",
      },
      name: {
        type: "string",
        alias: "n",
        description: "The name of the customer.",
      },
    },

    //Define function
    function (
      args: Arguments<{
        width: number;
        length: number;
        isFeet: boolean;
        name: string;
      }>
    ) {
      const house = calcHouseMaterials(
        args.name,
        args.width,
        args.length,
        args.isFeet
      );
      console.log(house);
    }
  );
}
