import { Button, Typography } from '@mui/material'
import { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)
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
