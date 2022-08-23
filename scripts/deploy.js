const hre = require("hardhat");

//LimaNFT contract address 0xf5DEb12Bb5943859765C99332b2336126EB14194
//LimaNFT Mumbai Polygon contract address 0xF470725F69b13678A9E43EdbF54818A6A195FA5C

async function main() {

  const LimaNFT = await hre.ethers.getContractFactory("LimaNFT");
  const limaNFT = await LimaNFT.deploy();

  await limaNFT.deployed();

  console.log("LimaNFT deployed to:", limaNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
