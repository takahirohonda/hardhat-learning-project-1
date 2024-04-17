# Hardhat Learning Project 1

## Useful command

```bash
# deploy Hello contract to the local host network
yarn hardhat node
yarn hardhat run scripts/deployHello.ts --network localhost
yarn hardhat run scripts/deployCounter.ts --network localhost
```

Then we can get the CONTRACT_ADDRESS that should be in `.env`:

```bash
eth_sendTransaction
  Contract deployment: HelloWorld
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x4b06e4c6c9777f0d0fe7d09b93afe324d14a22e76c4a415206dcfa6a1b6ed64e
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            133149 of 30000000
  Block #1:            0x1b2e57fc32e8bb34d1d0c061542760a91dc920cf02512b22fff02b92877aad15
```

## Configuring Metamask wallet

<img src="docs/local-network-config.png" />

## Setting up the project.

Followed this tutorial: https://hardhat.org/tutorial/creating-a-new-hardhat-project

Writing contract: https://hardhat.org/tutorial/writing-and-compiling-contracts

### Adding webpack to compile.

```bash
yarn add -D webpack webpack-cli ts-loader html-webpack-plugin dotenv
```

`hardhat-gas-reporter` is a nice module to measure how much gas is needed for function executions. This is used in the test.

```bash
yarn add -D hardhat-gas-reporter
```

## ether package is v6 in this project and the course uses v5

https://docs.ethers.org/v6/migrating/

```ts
// v5
provider = new ethers.providers.Web3Provider(window.ethereum);

// v6:
provider = new ethers.BrowserProvider(window.ethereum);
```

## Reference

### 1. Terms

[JSON-RPC](https://www.jsonrpc.org/specification)
[Metamask JSON-PPC API List](https://docs.metamask.io/wallet/reference/json-rpc-api/)
[React with Metamask](https://docs.metamask.io/wallet/tutorials/react-dapp-local-state/)

[Signed and Unsigned Integer](https://www.ibm.com/docs/en/aix/7.2?topic=types-signed-unsigned-integers) - The XDR standard defines signed integers as integer. A signed integer is a 32-bit datum that encodes an integer in the range [-2147483648 to 2147483647]. An unsigned integer is a 32-bit datum that encodes a non-negative integer in the range [0 to 4294967295].

### 2. Troubleshooting

```bash
contract runner does not support sending transactions (operation="sendTransaction", code=UNSUPPORTED_OPERATION, version=6.11.1)
```

**Solution**

The 3rd argument is signer. It's not the provider. Singer can call transactions. Provider is enough for

```js
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const contract = new ethers.Contract(
  contractAddress,
  [
    "function count() public",
    "function getCounter() public view returns (uint)",
  ],
  signer
);
```

And I misspelt uint as unit 😢 and had this error...

```
User
contract.getCounter is not a function
TypeError: contract.getCounter is not a function from this: import "hardhat/console.sol";
```

### (2)

I don't know what happened, but I imported a new account to the wallet and it worked.

```bash
could not coalesce error (error={ "code": -32603, "message": "Internal JSON-RPC error." })
```
