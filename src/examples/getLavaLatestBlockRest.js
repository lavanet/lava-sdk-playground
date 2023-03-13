const { LavaSDK } = require("lava-sdk");

// This example demonstrates how to use Lava SDK to query Lava network
// using rest api to fetch latest and parse latest block
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/examples/getLavaLatestBlockRest.js
async function main() {
  // Initialize Lava SDK
  const lava = await new LavaSDK({
    privateKey: "<private key from Cosmos Hub staked client>",
    chainID: "LAV1",
    rpcInterface: "rest",
  });

  // Get latest block
  const latestBlock = await lava.sendRelay({
    method: "GET",
    url: "/blocks/latest",
  });

  // Parse and extract response
  const parsedBlock = JSON.parse(latestBlock);

  // Extract latest block number
  const latestBlockNumber = parsedBlock.block.header.height;

  console.log(latestBlockNumber);
}

(async () => {
  await main();
})();
