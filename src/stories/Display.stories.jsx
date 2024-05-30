import React from 'react'

import { Display } from '../lib/components/Display'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'

export default {
  title: 'Utilities/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    children: { control: false }
  }
}

const Template = (args) => <Display show="desktop" {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <Card size="xs"><CardContent>Display</CardContent></Card>
  )
}

export const Show = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="show='mobile-sm'" dense /></Grid>
      <Display show="mobile-sm">
        <Grid item>
          <Card size="xs"><CardContent>Show on small mobile</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="show='mobile'" dense /></Grid>
      <Display show="mobile">
        <Grid item>
          <Card size="xs"><CardContent>Show on mobile</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="show='tablet'" dense /></Grid>
      <Display show="tablet">
        <Grid item>
          <Card size="xs"><CardContent>Show on tablet</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="show='laptop'" dense /></Grid>
      <Display show="laptop">
        <Grid item>
          <Card size="xs"><CardContent>Show on laptop</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="show='desktop'" dense /></Grid>
      <Display show="desktop">
        <Grid item>
          <Card size="xs"><CardContent>Show on desktop</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
  </Grid>
)

Show.parameters = {
  docs: {
    description: {
      story: 'Show the component depending on viewport width (resize your browser to see it in action).'
    }
  }
}

export const Hide = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="hide='mobile-sm'" dense /></Grid>
      <Display hide="mobile-sm">
        <Grid item>
          <Card size="xs"><CardContent>Hide on small mobile</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="hide='mobile'" dense /></Grid>
      <Display hide="mobile">
        <Grid item>
          <Card size="xs"><CardContent>Hide on mobile</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="hide='tablet'" dense /></Grid>
      <Display hide="tablet">
        <Grid item>
          <Card size="xs"><CardContent>Hide on tablet</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="hide='laptop'" dense /></Grid>
      <Display hide="laptop">
        <Grid item>
          <Card size="xs"><CardContent>Hide on laptop</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
    <Grid item wrapper col={4} spacing={1} direction="column">
      <Grid item><Snippet content="hide='desktop'" dense /></Grid>
      <Display hide="desktop">
        <Grid item>
          <Card size="xs"><CardContent>Hide on desktop</CardContent></Card>
        </Grid>
      </Display>
    </Grid>
  </Grid>
)

Hide.parameters = {
  docs: {
    description: {
      story: 'Hide the component depending on viewport width (resize your browser to see it in action).'
    }
  }
}
