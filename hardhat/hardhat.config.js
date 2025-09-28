require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sapphireTestnet: {
      url: process.env.SAPPHIRE_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 0x5aff, // 23295
    }
  }
};
