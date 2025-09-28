const hre = require("hardhat");

async function main() {
  const SimpleBet = await hre.ethers.getContractFactory("Bet");
  const simpleBet = await SimpleBet.deploy("your-domain.com");
  
  await simpleBet.waitForDeployment();
  
  console.log("SimpleBet deployed to:", await simpleBet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});