import { Outlet } from 'react-router'
import { WAGMI_TEST_PAGE_PATH } from '../WagmiTest/WagmiTestPage'

export const AUTO_WALLET_DETECTION = '/auto-wallet-detection'
export const Layout = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex gap-[24px]">
        <a href="/">Home</a>
        <a href={AUTO_WALLET_DETECTION}>Auto Wallet Detection</a>
        <a href={WAGMI_TEST_PAGE_PATH}>Wagmi Test</a>
      </div>
      <Outlet />
    </div>
  )
}
