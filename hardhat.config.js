require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@reef-defi/hardhat-reef");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
    solidity: "0.8.4",
    defaultNetwork:"reef_testnet",
    networks: {
      reef_testnet: {
        url: "wss://rpc-testnet.reefscan.com/ws",
        scanUrl: "https://reefscan.com",
        seeds:{
          "test":process.env.MNEMONIC_TESTNET,
        }
      },
    },
  };