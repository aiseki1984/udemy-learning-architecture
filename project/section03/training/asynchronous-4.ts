import fs from "node:fs/promises";
// import * as fs from "node:fs/promises";

async function main() {
  // let fileContent: string = "Not loaded";
  console.log("start");

  const fileContent = await fs.readFile("package.json", { encoding: "utf-8" });
  // const fileContent = fs.readFile("package.json", { encoding: "utf-8" });

  console.log(fileContent.toString());

  console.log("wip");

  console.log("end");
}

main();
