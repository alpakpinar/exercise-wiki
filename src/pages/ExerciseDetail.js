import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Loader from '../components/Loader'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const [dataFetched, setDataFetched] = useState(false)
  const { id } = useParams()

  // Fetch all exercise related data for the first time where the page is displayed
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, 
        exerciseOptions)

      setTargetMuscleExercises(targetMuscleExercisesData)
      
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, 
        exerciseOptions)

      setEquipmentExercises(equipmentExercisesData)
      
      // Flag specifying that the data is fully fetched, so that we don't show the loading spinner anymore
      setDataFetched(true)

    }
    fetchExercisesData()
  }, [id])
  
  // Detail component to show if the data is fetched
  if (dataFetched) {
    return (
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises 
          targetMuscleExercises={targetMuscleExercises} 
          equipmentExercises={equipmentExercises}
          />
      </Box>
    )
  }

  // If data is not yet fetched, show the loading spinner
  return (
    <Box>
      <Loader />
    </Box>
  )
  
}

export default ExerciseDetail