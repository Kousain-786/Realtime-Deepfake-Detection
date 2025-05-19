import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useUser } from './UserContext'

const Nav = () => {
    const {user} = useUser()

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 1,
    }}>
        <Box>
            <Typography variant='body1' fontWeight='bold'>Realtime Deepfake</Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
        }}>
            <Typography>{user.name}</Typography>
            <Button variant='text' size='small'>Log out</Button>
        </Box>
    </Box>
  )
}

export default Nav