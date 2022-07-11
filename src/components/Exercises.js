import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material' 

import { exerciseOptions, fetchData } from '../utils/fetchData'

import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 8

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        )
      }
      else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
      }
      setExercises(exercisesData)
    }

    fetchExercisesData()

  }, [bodyPart])

  return (
    <Box id="exercises"
      sx={{
        mt: { lg: '110px' }
      }}
      mt="20px"
      p="20px"
    >
      <Box textAlign="center" width="100%" mb="50px">
        <Typography
          variant="h4"
          mb="20px"
          fontWeight="bold"
        >
          Exercises
        </Typography>
        {exercises.length > 0 ? (
          <Typography variant="h5">
            We have 
            <span style={{ 
              fontWeight: 'bold',
              color: '#FF2625',
            }}>
              {` ${exercises.length} `}
            </span> 
            <span style={{ fontWeight: 'bold' }}>
              {bodyPart !== 'all' ? `${bodyPart} ` : ' '}
            </span>
            exercises for you. Make sure to check them out!
          </Typography>) : (
          <Typography variant="h5">
            Oops! We could not find any exercises, please try another search!
          </Typography>
        )}
      </Box>
      
      <Stack direction="row"
        sx={{
          gap: { lg: '110px', xs: '50px' }
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length > exercisesPerPage && (
            <Pagination 
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises