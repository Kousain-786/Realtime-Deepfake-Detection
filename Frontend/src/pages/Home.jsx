import React, { useState } from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import Nav from '../components/Nav'

const Home = () => {
  const [img, setImg] = useState()
  const [imgPredict, setImgPredict] = useState()
  const [video, setVideo] = useState()
  const [videoPredict, setVideoPredict] = useState()

  const handleImgSubmit = async () => {
    e.preventDefault()

    if (!img) {
      alert('Select an Image')
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users/predict/', // img input => send to backend
        img,
        // { headers: { 'Content-Type': 'application/json' } }
      );

      setImgPredict(response.data.predict)

    } catch (error) {
      console.error('Server response:', error.response?.data);
    }

  }

  const handleVideoSubmit = async () => {
    e.preventDefault()

    if (!video) {
      alert('Select a Video')
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users/predict/',  // ya video input backend pa send kar raha ha
        video,
        // { headers: { 'Content-Type': 'application/json' } }
      );

      setVideoPredict(response.data.predict)

    } catch (error) {
      console.error('Server response:', error.response?.data);
    }
  }

  const handleLive = () => {
    
  }

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
            <TextField type='file' size='small' value={img} onChange={(e) => setImg(e.target.value)} />
            <Button variant='outlined' color='primary' sx={{ mt: 2 }} onClick={handleImgSubmit}>Analyze Image</Button>
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
            <TextField type='file' size='small' value={video} onChange={(e) => setVideo(e.target.value)} />
            <Button variant='outlined' color='secondary' sx={{ mt: 2 }} onClick={handleVideoSubmit}>Analyze Video</Button>
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
            <Button variant='outlined' color='success' sx={{ mt: 2 }} onClick={(handleLive)} >Start Camera</Button>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default Home