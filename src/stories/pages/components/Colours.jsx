import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '../../../lib/components/Grid'
import { Text } from '../../../lib/components/Text'

const Colour =({
  background,
  // hasBorder,
  variable
}) => {
  return (
    <Grid item col={2}>
      <div style={{ backgroundColor: {background}, height: '2.5rem', width: '100%', borderRadius: '0.25rem', marginBottom: '0.25rem' }} className={'p-1'} />
      <Text variant='caption' weight='bold'>${variable}</Text>
    </Grid>
  )
}

Colour.propTypes = {
  background: PropTypes.string,
  hasBorder: PropTypes.bool,
  variable: PropTypes.string
}

export default Colour
