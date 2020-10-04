import { Arguments, Argv, string } from "yargs";

//Note: not expected to write tests for Yargs.
export function getHouseMaterials(yargs: Argv): void {
  yargs.command(
    //name the command
    "get-house-materials",
    //Describe the command
    "Gets an existing house by the name of the customer",
    //Define paramaters
    {
      name: {
        type: "string",
        alias: "n",
        description: "The name of the customer.",
      },
    },

    //Define function
    function (
      args: Arguments<{
        name: string;
      }>
    ) {
      const house = {
        name: args.name,
      };
      console.log(house);
    }
  );
}
