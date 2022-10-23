const hre = require("hardhat");

async function main() {
    const alice = await hre.reef.getSignerByName("test");
    await alice.claimDefaultAccount();
  const Greeter = await hre.reef.getContractFactory("Greeter",alice);
  const greeter = await Greeter.deploy("Hello world");
console.log("Greeter deployed successfully! at "+greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("this is error: ");
    console.error(error);
    process.exit(1);
  });