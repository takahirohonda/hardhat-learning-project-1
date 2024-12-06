import { Network, Alchemy } from 'alchemy-sdk'

const settings = {
  apiKey: 'ajvn8WLq5b-OjT7tBO_v5y62bs11mRas',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

// get all NFTs owned by the provided address or ENS domain
const nfts = alchemy.nft.getNftsForOwner('vitalik.eth')
