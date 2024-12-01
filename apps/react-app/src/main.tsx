import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import { App } from './app/app'
import { EIP6963Test } from './EIP6963Test/EIP6963Test'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <EIP6963Test />
  </StrictMode>
)
