import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Layer } from '../lib/components/Layer'
import { Text } from '../lib/components/Text'

export default {
  title: 'Utilities/Layer',
  component: Layer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    customFill: { control: 'color' },
    customStroke: { control: 'color' },
    wrapper: { defaultValue: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Layer {...args} className={'p-1'} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <Text variant="caption">Layer</Text>
  )
}

export const Fill = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer fill="black" className={'p-1 w-rem-15'}><Text variant="caption">Black</Text></Layer></Grid>
      <Grid item><Layer fill="white" className={'p-1 w-rem-15'}><Text variant="caption">White</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer fill="grey-90" className={'p-1 w-rem-15'}><Text variant="caption">Grey 90</Text></Layer></Grid>
      <Grid item><Layer fill="grey-80" className={'p-1 w-rem-15'}><Text variant="caption">Grey 80</Text></Layer></Grid>
      <Grid item><Layer fill="grey-70" className={'p-1 w-rem-15'}><Text variant="caption">Grey 70</Text></Layer></Grid>
      <Grid item><Layer fill="grey-60" className={'p-1 w-rem-15'}><Text variant="caption">Grey 60</Text></Layer></Grid>
      <Grid item><Layer fill="grey-50" className={'p-1 w-rem-15'}><Text variant="caption">Grey 50</Text></Layer></Grid>
      <Grid item><Layer fill="grey-40" className={'p-1 w-rem-15'}><Text variant="caption">Grey 40</Text></Layer></Grid>
      <Grid item><Layer fill="grey-30" className={'p-1 w-rem-15'}><Text variant="caption">Grey 30</Text></Layer></Grid>
      <Grid item><Layer fill="grey-20" className={'p-1 w-rem-15'}><Text variant="caption">Grey 20</Text></Layer></Grid>
      <Grid item><Layer fill="grey-10" className={'p-1 w-rem-15'}><Text variant="caption">Grey 10</Text></Layer></Grid>
      <Grid item><Layer fill="grey-5" className={'p-1 w-rem-15'}><Text variant="caption">Grey 5</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer fill="background" className={'p-1 w-rem-15'}><Text variant="caption">Background</Text></Layer></Grid>
      <Grid item><Layer fill="paper" className={'p-1 w-rem-15'}><Text variant="caption">Paper</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer fill="primary" className={'p-1 w-rem-15'}><Text variant="caption">Primary</Text></Layer></Grid>
      <Grid item><Layer fill="secondary" className={'p-1 w-rem-15'}><Text variant="caption">Secondary</Text></Layer></Grid>
      <Grid item><Layer fill="highlight" className={'p-1 w-rem-15'}><Text variant="caption">Highlight</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer fill="success" className={'p-1 w-rem-15'}><Text variant="caption">Success</Text></Layer></Grid>
      <Grid item><Layer fill="info" className={'p-1 w-rem-15'}><Text variant="caption">Info</Text></Layer></Grid>
      <Grid item><Layer fill="warning" className={'p-1 w-rem-15'}><Text variant="caption">Warning</Text></Layer></Grid>
      <Grid item><Layer fill="error" className={'p-1 w-rem-15'}><Text variant="caption">Error</Text></Layer></Grid>
    </Grid>
  </Grid>
)

export const Stroke = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer stroke="black" className={'p-1 w-rem-15'}><Text variant="caption">Black</Text></Layer></Grid>
      <Grid item><Layer stroke="white" className={'p-1 w-rem-15'}><Text variant="caption">White</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer stroke="grey-90" className={'p-1 w-rem-15'}><Text variant="caption">Grey 90</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-80" className={'p-1 w-rem-15'}><Text variant="caption">Grey 80</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-70" className={'p-1 w-rem-15'}><Text variant="caption">Grey 70</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-60" className={'p-1 w-rem-15'}><Text variant="caption">Grey 60</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-50" className={'p-1 w-rem-15'}><Text variant="caption">Grey 50</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-40" className={'p-1 w-rem-15'}><Text variant="caption">Grey 40</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-30" className={'p-1 w-rem-15'}><Text variant="caption">Grey 30</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-20" className={'p-1 w-rem-15'}><Text variant="caption">Grey 20</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-10" className={'p-1 w-rem-15'}><Text variant="caption">Grey 10</Text></Layer></Grid>
      <Grid item><Layer stroke="grey-5" className={'p-1 w-rem-15'}><Text variant="caption">Grey 5</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer stroke="background" className={'p-1 w-rem-15'}><Text variant="caption">Background</Text></Layer></Grid>
      <Grid item><Layer stroke="paper" className={'p-1 w-rem-15'}><Text variant="caption">Paper</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer stroke="primary" className={'p-1 w-rem-15'}><Text variant="caption">Primary</Text></Layer></Grid>
      <Grid item><Layer stroke="secondary" className={'p-1 w-rem-15'}><Text variant="caption">Secondary</Text></Layer></Grid>
      <Grid item><Layer stroke="highlight" className={'p-1 w-rem-15'}><Text variant="caption">Highlight</Text></Layer></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Layer stroke="success" className={'p-1 w-rem-15'}><Text variant="caption">Success</Text></Layer></Grid>
      <Grid item><Layer stroke="info" className={'p-1 w-rem-15'}><Text variant="caption">Info</Text></Layer></Grid>
      <Grid item><Layer stroke="warning" className={'p-1 w-rem-15'}><Text variant="caption">Warning</Text></Layer></Grid>
      <Grid item><Layer stroke="error" className={'p-1 w-rem-15'}><Text variant="caption">Error</Text></Layer></Grid>
    </Grid>
  </Grid>
)

export const Custom = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Layer customFill="#C6882C" className={'p-1 w-rem-15'}><Text variant="caption">custom fill</Text></Layer></Grid>
    <Grid item><Layer customStroke="#007BFF" className={'p-1 w-rem-15'}><Text variant="caption">custom stroke</Text></Layer></Grid>
    <Grid item><Layer customFill="#C6882C" customStroke="#007BFF" className={'p-1 w-rem-30'}><Text variant="caption">custom fill & stroke</Text></Layer></Grid>
  </Grid>
)

Custom.parameters = {
  docs: {
    description: {
      story: 'Boolean prop to enter a custom value in the fill or stroke props (or both).'
    }
  }
}

export const HasHover = () => (
  <Layer fill="paper" hasHover className={'p-1'}><Text variant="caption">Has hover effect</Text></Layer>
)

HasHover.parameters = {
  docs: {
    description: {
      story: 'Add background color effect on hover (used on buttons for instance).'
    }
  }
}
