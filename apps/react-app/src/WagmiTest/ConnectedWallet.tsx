import { useAccount } from 'wagmi'

import { WalletOptions } from './WalletOptions'
import { ConnectedAccount } from './ConnectedAccount'

export const ConnectedWallet = () => {
  const { isConnected } = useAccount()
  return <div>{isConnected ? <ConnectedAccount /> : <WalletOptions />}</div>
}
