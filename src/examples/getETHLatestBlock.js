const { LavaSDK } = require("@lavanet/lava-sdk");
require("dotenv").config();

// This example demonstrates how to use Lava SDK to query ETH network
// using jsonrpc to fetch latest and parse latest block
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/examples/getETHLatestBlock.js
async function main() {
  // Initialize Lava SDK
  const eth = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: "ETH1",
  });

  // Send relay request to fetch latest block number
  const blockNumberResponse = await eth.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  // Parse and extract response
  const parsedResponse = JSON.parse(blockNumberResponse);

  // Extract latest block number
  const latestBlockNumber = parsedResponse.result;

  console.log(latestBlockNumber);
}

(async () => {
  await main();
})();
