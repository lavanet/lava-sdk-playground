const { LavaEthersProvider } = require("@lavanet/lava-sdk-providers");
const { Wallet, parseEther } = require("ethers");
require("dotenv").config();

// This example demonstrates how to use Lava Ethers provider to send transactions
// using ethers.js library
// To run this example, first add the private key of a staked account and other accounts and keys,
// then use the following command:
// node ./src/regression/lavaEthersSendingTx.js
async function main() {
  // Initialize Lava SDK provider
  const ethProvider = await new LavaEthersProvider({
    privKey: process.env.PRIVATE_KEY,
    chainID: "OPTMT",
  });

  const txCount = await ethProvider.getTransactionCount("<from_account>");

  const wallet = new Wallet("<account_private_key>");

  const signer = wallet.connect(ethProvider);

  const response = await signer.sendTransaction({
    nonce: txCount,
    to: "<to_account>",
    value: parseEther("0.001"), // 1 ether
    chainId: "<network_chain_id>",
  });

  console.log(response);
}

(async () => {
  await main();
})();
