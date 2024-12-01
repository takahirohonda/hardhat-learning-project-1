import { Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  // Using EIP-6963 instead of using window.ethereum method
  useEffect(() => {
    console.log('In progress...')
  }, [])
  return (
    <div className="container mx-auto my-4">
      <Typography variant="h1" className="text-center">
        Ethereum Counter
      </Typography>
      <Button variant="contained" color="primary">
        Click Me!
      </Button>
      <div>{count}</div>
    </div>
  )
}
