import { getAccount } from '@wagmi/core'
import { config } from './config'
import { Typography } from '@mui/material'

export const ConnectedNetwork = () => {
  const { chainId } = getAccount(config)
  const chain = config.chains.find((chain) => chain.id === chainId)
  return (
    <div className="flex flex-col">
      <Typography variant="subtitle1">Connected to:</Typography>
      <Typography variant="subtitle1">{JSON.stringify(chain)}</Typography>
    </div>
  )
}
