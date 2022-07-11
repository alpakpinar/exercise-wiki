import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ( {targetMuscleExercises, equipmentExercises} ) => {
  return (
    <Box sx={{
      mt: { lg: '100px', xs: '0' }
    }}>
      <Typography variant="h4" mb={5} ml={5}>
        Other Exercises Targeting {` `}
        <span style={{
          color: '#ff2625',
          textTransform: 'capitalize'
        }}>{targetMuscleExercises[0].target}</span>
      </Typography>
      <Stack direction="row" sx={{
        p: '2', 
        position: 'relative',
        mb: 5
      }}>
        <HorizontalScrollbar data={targetMuscleExercises} />
      </Stack>
      <Typography variant="h4" mb={5} ml={5}>
        Other Exercises Using {` `}
        <span style={{
          color: '#ff2625',
          textTransform: 'capitalize'
        }}>{equipmentExercises[0].equipment}</span>
      </Typography>
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