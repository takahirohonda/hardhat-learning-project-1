import { Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [count, setCount] = useState(0)

  // Using EIP-6963 instead of using window.ethereum method
  useEffect(() => {
    console.log('In progress...')
  }, [])
  return (
    <div className="container mx-auto my-4 flex flex-col gap-[48px]">
      <Typography variant="h3" component="h1" className="text-center">
        Ethereum Counter
      </Typography>
      <div className="flex flex-col gap-[48px] items-center">
        <Button variant="contained" color="primary" className="w-[200px]">
          Click Me!
        </Button>
        <Typography variant="h4" component="p">
          {count}
        </Typography>
      </div>
    </div>
  )
}
