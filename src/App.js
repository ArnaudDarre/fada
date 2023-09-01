import React from 'react'

import { Grid } from './lib/components/Grid'
import { Text } from './lib/components/Text'

import './lib/styles/index.scss'

function App() {
  return (
    <Grid wrapper direction='column' alignItems='center'>
      <Grid item alignItems='baseline' className={'mb-5'}>
        <Text variant='h1' component='h1' color='primary' transform='capitalize'>{`${process.env.REACT_APP_NAME}`}</Text>
        <Text className='ml-1'>{`${process.env.REACT_APP_VERSION}`}</Text>
      </Grid>
    </Grid>
  )
}

export default App
