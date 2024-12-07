# Testing Wagmi

### Doing

**Wagmi Testing**
✅ Getting started with wagmi (https://wagmi.sh/react/getting-started) - add config and boiler plate code.
✅ Connect wallet (https://wagmi.sh/react/guides/connect-wallet)
[] Send Transaction (https://wagmi.sh/react/guides/send-transaction)
[] Read from Contract (https://wagmi.sh/react/guides/read-from-contract)
[] Write to Contract (https://wagmi.sh/react/guides/write-to-contract)

### To do

[] ? probaby won't do... but read it again later... Create an ethereum account with metamask (see the step 3 of this, https://www.web3.university/tracks/create-a-smart-contract/deploy-your-first-smart-contract)

### Done

✅ Install `wagmi`.
✅ Sign up for Alchemy & connect wallet to testnet & get dev Eth with faucet.

## 1. Installation

https://wagmi.sh/react/getting-started

```bash
yarn add wagmi viem@2.x @tanstack/react-query
```

## 2. Connecting to Current TestNet -> Sepolia

Tried to send a network request to Sepolia

```bash
> curl 'https://eth-sepolia.g.alchemy.com/v2/[YOUR-API-KEY]/getNFTs/?owner=vitalik.eth'

ENS name resolution is currently only supported on Ethereum Mainnet%
```

Connect my wallet to the Sepolia blockchain

- Network Name - Sepolia Test Network
- RPC URL - https://eth-sepolia.g.alchemy.com/v2/[YOUR-API-KEY]
- Chain ID - 11155111
- Currency Symbol - SepoliaETH
- Block Explorer URL - https://sepolia.etherscan.io/

Go to Alchemy's free Sepolia Faucet (https://www.alchemy.com/faucets/ethereum-sepolia). This needs a small amount of ETH in mainnet.

# MiscellaneousThings/ Notes

Tried to send a network request to Sepolia

```bash
> curl 'https://eth-sepolia.g.alchemy.com/v2/[YOUR-API-KEY]/getNFTs/?owner=vitalik.eth'

ENS name resolution is currently only supported on Ethereum Mainnet%
```
