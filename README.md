
# Reef Hardhat Minimal Setup 

This is the minimal set of files you require to deploy your smart contracts on reef chain using hardhat. 
This is just like a boiler plate of hardhat , just for reef chain deployment purpose.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MNEMONIC_TESTNET`



## Run Locally

Clone the project

```bash
  git clone https://github.com/anukulpandey/reef-hardhat-minimal
```

Go to the project directory

```bash
  cd reef-hardhat-minimal
```

Install dependencies

```bash
  yarn install
```

Compile the smart contract

```bash
  yarn hardhat compile
```

Test the smart contract

```bash
  yarn hardhat test
```

Deploy the smart contract

```bash
  yarn hardhat run .\scripts\deploy.js
```
