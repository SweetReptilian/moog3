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

    // Now you can call functions of the contract
    await contract.setConnectionContract(Connections.address);
}

main();