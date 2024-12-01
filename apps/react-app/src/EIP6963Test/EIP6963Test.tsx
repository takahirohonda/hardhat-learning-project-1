import { useState } from 'react'
import { useSyncProviders } from './useSyncProviders'

export const EIP6963Test = () => {
  const [selectedWallet, setSelectedWallet] = useState<
    EIP6963ProviderDetail | undefined
  >()
  const [userAccount, setUserAccount] = useState<string>('')
  const providers = useSyncProviders()

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    const accounts = await providerWithInfo.provider
      .request({ method: 'eth_requestAccounts' })
      .catch(console.error)

    if (accounts && (accounts as any)[0]) {
      setSelectedWallet(providerWithInfo)
      setUserAccount((accounts as any)[0])
    }
  }

  return (
    <>
      <h2>Wallets Detected:</h2>
      <div>
        {providers.length > 0 ? (
          providers.map((provider) => (
            <button
              key={provider.info.uuid}
              onClick={() => handleConnect(provider)}
            >
              <img src={provider.info.icon} alt={provider.info.name} />
              <div>{provider.info.name}</div>
            </button>
          ))
        ) : (
          <div>There are no announced providers.</div>
        )}
      </div>
      <hr />
      <h2>{userAccount ? 'Wallet Selected' : 'No Wallet Selected'}</h2>
      {userAccount && (
        <div>
          <img
            src={selectedWallet!.info.icon}
            alt={selectedWallet!.info.name}
          />
          <div>{selectedWallet!.info.name}</div>
          <div>({userAccount})</div>
        </div>
      )}
    </>
  )
}
