import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ConnectedWallet } from './ConnectedWallet'
export const WAGMI_TEST_PAGE_PATH = '/wagmi-test'

export const WagmiTestPage = () => {
  const queryClient = new QueryClient()
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Wagmi Test Page</h1>
          {/* <Profile /> */}

          <ConnectedWallet />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
