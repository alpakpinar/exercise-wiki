import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ( {targetMuscleExercises, equipmentExercises} ) => {
  return (
    <Box sx={{
      mt: { lg: '50px', xs: '0' }
    }}>
      <Box textAlign="center" my={3} sx={{
        pb: { lg: '20px' }
      }}>
        <Typography variant="h4">
          Other Exercises Targeting {` `}
          <span style={{
            color: '#ff2625',
            textTransform: 'capitalize',
            fontWeight: 'bold'
          }}>{targetMuscleExercises[0].target}</span>
        </Typography>
      </Box>
      
      <Stack direction="row" sx={{
        p: '2', 
        position: 'relative',
        mb: 5
      }}>
        <HorizontalScrollbar data={targetMuscleExercises} />
      </Stack>
      <Box textAlign="center" my={3} sx={{
        pb: { lg: '20px' }
      }}>
        <Typography variant="h4">
          Other Exercises Using {` `}
          <span style={{
            color: '#ff2625',
            textTransform: 'capitalize',
            fontWeight: 'bold'
          }}>{equipmentExercises[0].equipment}</span>
        </Typography>
      </Box>
      
      <Stack direction="row" sx={{
        p: '2', 
        position: 'relative'
      }}>
        <HorizontalScrollbar data={equipmentExercises} />
      </Stack>
    </Box>
  )
}

export default SimilarExercises