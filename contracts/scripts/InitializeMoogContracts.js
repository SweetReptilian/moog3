// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const Query = await ethers.getContractFactory("Query");
    console.log("Deploying Query...");
    const query = await upgrades.deployProxy(Query, [], {
        initializer: "initialize",
    });
    await query.deployed();
    console.log("Query deployed to:", query.address);

    const Contributor = await ethers.getContractFactory("Contributor");
    console.log("Deploying Contributor...");
    const contributor = await upgrades.deployProxy(Contributor, [query.address], {
        initializer: "initialize",
    });
    await contributor.deployed();
    console.log("Contributor deployed to:", contributor.address);

    const Post = await ethers.getContractFactory("Post");
    console.log("Deploying Post Contract...");
    const post = await upgrades.deployProxy(Post, [query.address], {
        initializer: "initialize",
    });
    await post.deployed();
    console.log("Post deployed to:", post.address);

    const MoogDao = await ethers.getContractFactory("MoogDao");
    console.log("Deploying MoogDao Contract...");
    const moogdao = await upgrades.deployProxy(MoogDao, [query.address, contributor.address, post.address], {
        initializer: "initialize",
    });
    await moogdao.deployed();
    console.log("MoogDao deployed to:", moogdao.address);

    const connections = await ethers.getContractFactory("connections");
    console.log("Deploying connections Contract...");
    const Connections = await upgrades.deployProxy(connections, [moogdao.address, query.address], {
        initializer: "initialize",
    });
    await Connections.deployed();
    console.log("connections deployed to:", Connections.address);

    const contract = MoogDao.attach(
        moogdao.address
    );

    // Initializing MoogDao contract
    await contract.setConnectionContract(Connections.address);

    console.log("Deploying Moogles Contract...");
    const Moogles = await ethers.getContractFactory("Moogles");
    const moogles = await Moogles.deploy();

    await moogles.deployed();
    console.log("Moogles deployed to:", moogles.address);

    const contract2 = Moogles.attach(moogles.address);

    // Initializing the Moogles NFTcontract
    await contract2.setConnectionContract(Connections.address);
}

main();