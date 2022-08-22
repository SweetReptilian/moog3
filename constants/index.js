import { MoogDaoContractAddress, MooglesNFTContractAddress } from "./contractAddress"
import {
    postTableUri,
    contributionTableUri,
    profileTableUri,
    projectTableUri,
} from "./tablelandTables"
import { defaultImgs } from "./defaultImgs"

const MoogDaoAbi = require("./moogDaoAbi.json")
const MoogleNFTAbi = require("./moogleNFTAbi.json")

module.exports = {
    MoogDaoContractAddress,
    MooglesNFTContractAddress,
    MoogDaoAbi,
    MoogleNFTAbi,
    defaultImgs,
    projectTableUri,
    postTableUri,
    profileTableUri,
    contributionTableUri,
}
