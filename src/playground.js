const { LavaSDK } = require("lava-sdk");

/**
 * This is a playground for testing LavaSDK methods.
 *
 * To use this playground, simply add your private key, chainID and other required
 * parameters while initializing the LavaSDK object. You can then use the `sendRelay`
 * method to query the network using either the jsonrpc, tendermintrpc or rest interface.
 *
 * If you are using the rest interface, make sure to comment out lines 12-14 and uncomment
 * the second script to send relay requests.
 *
 */
async function main() {
  const sdk = await new LavaSDK({
    privateKey: "<private key from Cosmos Hub staked client>",
    chainID: "<ChainID of the network you want to query>",
    jsonRPC:
      "<method to be used for JSON-RPC calls [tendermintrpc, jsonrpc, rest]>", // optional
    pairingListConfig:
      "<configuration for the pairing list of providers to use, if empty the public testnet will be used>", // optional,
    geolocation: "<geolocation of the providers to use>", //optional
  });

  // Send relay request for a jsonrpc/tendermintrpc method
  const response = await sdk.sendRelay({
    method: "<method name>",
    params: ["<array of params>"],
  });

  console.log(response);

  // Important //
  // If you are using rest rpcInterface for querying the network
  // comment from the line 12-14 and uncomment seconds script for sending relays
  /*
    Send relay request for a rest method
    const response = await sdk.sendRelay({
      method: "<request method [GET/POST]>",
      url: "URL of the request",
      data: "query params"
    });
  */
}

(async () => {
  await main();
})();
