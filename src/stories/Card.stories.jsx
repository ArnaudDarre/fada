import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { Card } from '../lib/components/Card'
import { CardActions } from '../lib/components/CardActions'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { CardMedia } from '../lib/components/CardMedia'
import { Grid } from '../lib/components/Grid'

import { CardExample } from './components/CardExample'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Wrapper for all card elements, one of the most common component in a UI.'
      }
    }
  },
  argTypes: {
    direction: { defaultValue: 'portrait' },
    transparent: { defaultValue: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Card {...args} style={{ maxWidth: 400 }} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <CardMedia
        height={300}
        image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg'
      />
      <CardHeader
        title="Mushrooms"
        subtitle="Edible mushrooms"
      />
      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
      <CardActions>
        <Button color="grey-60">Back</Button>
        <Buttons>
          <Button color="error">Cancel</Button>
          <Button color="primary">Save</Button>
        </Buttons>
      </CardActions>
    </>
  )
}

export const Size = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={2}><CardExample size="xs" title="XSmall" /></Grid>
    <Grid item sm={3}><CardExample size="sm" title="Small" /></Grid>
    <Grid item sm={4}><CardExample title="Medium (default)" /></Grid>
    <Grid item sm={5}><CardExample size="lg" title="Large" /></Grid>
    <Grid item sm={6}><CardExample size="xl" title="XLarge" /></Grid>
  </Grid>
)

export const Fill = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={4}><CardExample title="Paper (default)" /></Grid>
    <Grid item sm={4}><CardExample title="White" fill="white" /></Grid>
    <Grid item sm={4}><CardExample title="Primary" fill="primary" /></Grid>
  </Grid>
)

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={4}><CardExample title="Portrait (default)" /></Grid>
    <Grid item sm={8}><CardExample title="Landscape" direction="landscape" width={100} /></Grid>
  </Grid>
)

export const Align = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={4}><CardExample title="Left (default)" /></Grid>
    <Grid item sm={4}><CardExample title="Center" align="center" /></Grid>
    <Grid item sm={4}><CardExample title="Right" align="right" /></Grid>
  </Grid>
)

export const Transparent = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={4}><CardExample title="Portrait (default)" transparent /></Grid>
  </Grid>
)

export const HasShadow = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={4}><CardExample title="With box shadow" hasShadow /></Grid>
  </Grid>
)
