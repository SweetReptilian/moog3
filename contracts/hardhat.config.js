require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
    solidity: "0.8.12",
    networks: {
        mumbai: {
            url: `polygon-mumbai-provider(Alchemy prefered)`,
            accounts: ["your wallet secret key"],
        },
    },
    etherscan: {
        apiKey: "XAP64G9KV63W7FDW6V7IXGF4E1KMD7E2KK",
    },
}