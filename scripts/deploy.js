async function main() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');

    // Start deployment, returning a promise that resolved to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log('Contract deployed to address:', hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });

/* 
This script (deploy.js) is used to deploy the smart contract, and it will result to the contract address being created, 
which means that the smart contract was successfully deployed
*/