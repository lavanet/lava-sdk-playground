const { LavaSDK } = require("@lavanet/lava-sdk");
require("dotenv").config();

// This example demonstrates how to use Lava SDK to query ETH network
// using jsonrpc to fetch latest and parse latest block
// To run this example, first add the private key of a staked account and then use the following command:
// node ./src/regression/multipleEpochTest.js
async function main() {
  console.log(process.env.PRIVATE_KEY);
  // Initialize Lava SDK
  const eth = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: "ETH1",
    geolocation: "2",
  });

  for (var i = 0; i < 40; i++) {
    console.log("Call number", i);
    try {
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
      console.log("Usaoo sleep");
      sleepFor(60000);
      console.log("Izasao sleep");
    } catch (err) {
      console.log(err);
    }
  }

  console.log("");
}

function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* Do nothing */
  }
}

(async () => {
  await main();
})();
