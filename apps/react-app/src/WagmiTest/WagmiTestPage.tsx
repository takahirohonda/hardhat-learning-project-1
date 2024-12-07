import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ConnectedWallet } from './ConnectedWallet'
import { Typography } from '@mui/material'
export const WAGMI_TEST_PAGE_PATH = '/wagmi-test'

export const WagmiTestPage = () => {
  const queryClient = new QueryClient()
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="mt-[40px] flex flex-col gap-[16px]">
          <Typography variant="h3">Wagmi Test Page</Typography>
          {/* <Profile /> */}

          <ConnectedWallet />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
