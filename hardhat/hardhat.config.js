require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,   // 👈 This must be inside `settings`
    },
  },
  networks: {
    sapphireTestnet: {
      url: "https://testnet.sapphire.oasis.io", // adjust if needed
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  sourcify: {
    enabled: true
  }
  
};

