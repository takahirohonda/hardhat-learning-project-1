import { Button, Typography } from '@mui/material'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { ConnectedNetwork } from './ConnectedNetwork'

export const ConnectedAccount = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="flex flex-col gap-[24px]">
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <div className="flex flex-col gap-[16px]">
          <Typography variant="subtitle1">
            {ensName ? `${ensName} (${address})` : address}
          </Typography>
          <ConnectedNetwork />
        </div>
      )}
      <Button variant="outlined" onClick={() => disconnect()}>
        Disconnect
      </Button>
    </div>
  )
}
