<!-- The command to deploy the contracts -->

npx hardhat run scripts/InitializeMoogContracts.js --network mumbai

<!-- command to verify MoogDao contract -->

npx hardhat verify "MoogDao deployed Address from terminal after running the above command" --network mumbai
