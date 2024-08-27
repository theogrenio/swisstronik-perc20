const { ethers } = require("hardhat");

async function main() {
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();

  console.log(`Your PERC20 Contract Address: ${await perc20.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
