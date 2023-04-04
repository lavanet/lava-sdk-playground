const { LavaSDK } = require("@lavanet/lava-sdk");
require("dotenv").config();

// This example sends 1000 requests to etherem network
// to make sure that signatures are good
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/regression/spamTest.js
async function main() {
  // Initialize Lava SDK
  const eth = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: "ETH1",
    geolocation: "2",
  });

  for (var i = 0; i < 1000; i++) {
    console.log("Call number", i);
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
}

(async () => {
  await main();
})();
