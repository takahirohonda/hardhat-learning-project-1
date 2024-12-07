import { Button } from '@mui/material'
import { Connector, useConnect } from 'wagmi'

export const WalletOptions = () => {
  const { connectors, connect } = useConnect()

  return (
    <div className="flex gap-[24px]">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          variant="contained"
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </Button>
      ))}
    </div>
  )
}
