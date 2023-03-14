const { LavaEthersProvider } = require("lava-sdk-providers");
require("dotenv").config();

// This example demonstrates how to use Lava Ethers provider to query ETH network
// using ethers.js library to fetch latest and parse latest block
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/examples/ethersProvider.js
async function main() {
  // Initialize Lava SDK
  const ethProvider = await new LavaEthersProvider({
    privKey: process.env.PRIVATE_KEY,
    chainID: "ETH1",
  });

  // Send relay request to fetch latest block number
  const blockNumberResponse = await ethProvider.getBlockNumber();

  console.log(blockNumberResponse);
}

(async () => {
  await main();
})();
