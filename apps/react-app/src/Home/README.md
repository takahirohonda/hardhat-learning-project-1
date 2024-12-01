# Ethers.js

https://docs.ethers.org/v6/getting-started/

## Important concept

Metamask (and other injection providers) is a browser extension that injects objects into the window, providing these 2 things:

**Provider:** Read-only access to the Ethereum network.
**Signer:** Authenticated write access backed by a private key.

`EIP-6963` is an alternative wallet detection mechanism to the `window.ethereum` injected provider. It enables wallet interoperability by discovering multiple injected wallet providers in a browser. `EIP-6963` is the recommended mechanism to connect to MetaMask (https://docs.metamask.io/wallet/reference/provider-api/).

https://hackmd.io/@VydelHxmR0CbKxAe4TjhbQ/BJ9Bf4XD6#A-Guide-to-EIP-6963-for-React-Developers

Wallet detection with `EIP-6963`: https://metamask.io/news/developers/how-to-implement-eip-6963-support-in-your-web3-dapp/

## Mental picture of how Frontend works

1. See if the browser has a wallet.

There are two ways of detecting wallet. (1) using `window.ethereum` and (2) using `EIP-6963`. The latter is new and recommended, but the first one will be supported, too.

- (1) Using `window.ethereum` with `ethers.js`. `ethers.js` doesn't support EIP-6963 natively.

```ts
let signer = null
let provider
if (window.ethereum == null) {
  console.log('Metamask is not installed, using read-only default')
  provider = ethers.getDefaultProvider()
}
```

## In progress...

Doing

https://metamask.io/news/developers/how-to-implement-eip-6963-support-in-your-web3-dapp/

To do:

install wagmi and set up the connection...
