import { Outlet } from 'react-router'

export const AUTO_WALLET_DETECTION = '/auto-wallet-detection'
export const Layout = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex gap-[24px]">
        <a href="/">Home</a>
        <a href={AUTO_WALLET_DETECTION}>Auto Wallet Detection</a>
      </div>
      <Outlet />
    </div>
  )
}
