import React from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <Box>
      <Nav />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        p: 8,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}>
          <Typography variant='h3' >Realtime Deepfake Detection</Typography>
          <Typography variant='p' >Your heaven for Multimedia Security and Deepfake Detection.</Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2
        }}>
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            p: 4
          }}>
            <Typography variant='h6' fontWeight='bold'>Image Analysis</Typography>
            <TextField type='file' size='small' />
            <Button variant='outlined' color='primary' sx={{ mt: 2 }}>Analyze Image</Button>
          </Card>

          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            p: 4
          }}>
            <Typography variant='h6' fontWeight='bold'>Video Analysis</Typography>
            <TextField type='file' size='small' />
            <Button variant='outlined' color='secondary' sx={{ mt: 2 }}>Analyze Video</Button>
          </Card>

          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            p: 4
          }}>
            <Typography variant='h6' fontWeight='bold'>Live Detection</Typography>
            <Typography variant='p'>Real-time webcam analysis</Typography>
            <Button variant='outlined' color='success' sx={{ mt: 2 }} >Start Camera</Button>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default Home