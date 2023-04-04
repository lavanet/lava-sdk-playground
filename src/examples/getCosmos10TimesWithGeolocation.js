const { LavaSDK } = require("@lavanet/lava-sdk");
require("dotenv").config();

// This example demonstrates how to use Lava SDK to query CosmosHub network
// using tendermintRPC to fetch latest and parse latest block
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/examples/getCosmos10TimesWithGeolocation.js

async function fetchLatestBlock(cosmosHub) {
  const startTime = Date.now();

  // Get abci_info
  const info = await cosmosHub.sendRelay({
    method: "abci_info",
    params: [],
  });

  // Parse and extract response
  const parsedInfo = JSON.parse(info).result.response;

  // Extract latest block number
  const latestBlockNumber = parsedInfo.last_block_height;

  const elapsedTime = Date.now() - startTime;
  console.log(
    `Latest block number: ${latestBlockNumber} (fetched and parsed in ${elapsedTime} ms)`
  );

  return elapsedTime;
}

async function main() {
  // Initialize Lava SDK
  const initStartTime = Date.now();
  const cosmosHub = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    geolocation: "2",
    chainID: "COS5",
  });
  const initElapsedTime = Date.now() - initStartTime;
  console.log(`Lava SDK initialized in ${initElapsedTime} ms`);

  // Fetch latest block 10 times and measure time
  let totalTime = 0;
  for (let i = 0; i < 10; i++) {
    const elapsedTime = await fetchLatestBlock(cosmosHub);
    totalTime += elapsedTime;
  }

  // Calculate and log average time
  const avgTime = totalTime / 10;
  console.log(`Average time to fetch and parse latest block: ${avgTime} ms`);
}

(async () => {
  await main();
})();
