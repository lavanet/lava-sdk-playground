const { LavaSDK } = require("lava-sdk");
require("dotenv").config();

// This example demonstrates how to use Lava SDK to query CosmosHub network
// using tendermintRPC to fetch latest and parse latest block
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/examples/getCosmosHubLatestBlock.js
async function main() {
  // Initialize Lava SDK
  const cosmosHub = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: "COS5",
  });

  // Get abci_info
  const info = await cosmosHub.sendRelay({
    method: "abci_info",
    params: [],
  });

  // Parse and extract response
  const parsedInfo = JSON.parse(info).result.response;

  // Extract latest block number
  const latestBlockNumber = parsedInfo.last_block_height;

  console.log(latestBlockNumber);
}

(async () => {
  await main();
})();
