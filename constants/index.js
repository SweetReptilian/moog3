import { MoogDaoContractAddress } from "./contractAddress"
import {
    postTableUri,
    contributionTableUri,
    profileTableUri,
    projectTableUri,
} from "./tablelandTables"
import { defaultImgs } from "./defaultImgs"

const MoogDaoAbi = require("./moogDaoAbi.json")

module.exports = {
    MoogDaoContractAddress,
    MoogDaoAbi,
    defaultImgs,
    projectTableUri,
    postTableUri,
    profileTableUri,
    contributionTableUri,
}
