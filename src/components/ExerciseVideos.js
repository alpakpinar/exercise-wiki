import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ( {exerciseVideos, name} ) => {
  // Number of videos to display in a detail page
  const numVideos = 3

  return (
    <Box sx={{
      marginTop: { lg: '100px', xs: '20px' },
      p: '20px'
    }}>
      <Typography variant="h4" mb="33px" textAlign="center">
        Watch <span style={{
          color: '#ff2625', 
          textTransform: 'capitalize',
          fontWeight: 'bold'
          }}>{name}</span> Exercise Videos
      </Typography>
      <Stack 
        justifyContent="flexStart" 
        flexWrap="wrap" 
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: '110px', xs: '0' } 
        }}
        >
          {exerciseVideos?.slice(0,numVideos).map((item, index) => (
            <Box sx={{ 'my' : { 'xs' : '35px' } }}>
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                  <Typography variant="h5" color="#000" fontWeight="bold">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h6" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            </Box>
          ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos