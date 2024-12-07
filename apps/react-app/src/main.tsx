import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import { Home } from './Home/Home'
import { AutoWalletDetection } from './AutoWalletDetection/AutoWalletDetection'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AUTO_WALLET_DETECTION, Layout } from './Layout/Layout'
import { WAGMI_TEST_PAGE_PATH, WagmiTestPage } from './WagmiTest/WagmiTestPage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path={AUTO_WALLET_DETECTION}
            element={<AutoWalletDetection />}
          />
          <Route path={WAGMI_TEST_PAGE_PATH} element={<WagmiTestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
