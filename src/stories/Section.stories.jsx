import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Section } from '../lib/components/Section'

export default {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Section {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Food',
  title: 'Edible mushrooms',
  subtitle: 'Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi.'
}

export const Guide = Template.bind({})

export const Align = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item>
      <Section
        align="left"
        title="Left"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
    <Grid item>
      <Section
        align="center"
        title="Center"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
    <Grid item>
      <Section
        align="right"
        title="Right"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
  </Grid>
)

export const Fill = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item>
      <Section
        color="default"
        title="Default"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
    <Grid item>
      <Section
        color="paper"
        title="Paper"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
    <Grid item>
      <Section
        color="primary"
        title="Primary"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
    <Grid item>
      <Section
        color="primaryLight"
        title="Primary Light"
        subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
      />
    </Grid>
  </Grid>
)

export const Landing = () => (
  <Section
    landing
    title="Landing"
    subtitle="Add the modifier class section--landing to automatically style the header for the website title on the homepage."
  />
)

export const Header = () => (
  <Section
    header
    title="Header"
    subtitle="Add the modifier class section--header to automatically style the header for the page title (first section of the page)."
  />
)
