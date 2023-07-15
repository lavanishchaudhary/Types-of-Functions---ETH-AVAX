const { ethers } = require("hardhat");

async function main() {
  const name = "My Token";
  const symbol = "MTK";
  const initialSupply = 1000000;

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(name, symbol, initialSupply);

  myToken.waitForDeployment();

  console.log("Token deployed to:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
