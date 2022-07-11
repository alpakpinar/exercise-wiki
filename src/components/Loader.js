import React from 'react'

import { Box, Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Box mt="20px">
      <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
          <InfinitySpin color="gray" />
      </Stack>
    </Box>
  )
}

export default Loader