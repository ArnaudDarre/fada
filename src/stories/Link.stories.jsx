import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'

import { Grid } from '../lib/components/Grid'
import { Link } from '../lib/components/Link'

export default {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    icon: { defaultValue: false },
    disabled: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Link {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Link'
}

export const Icon = () => (
  <Link icon={<ArrowRight />}>Link with icon</Link>
)

export const Color = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper spacing={2}>
      <Grid item><Link color="default">Default</Link></Grid>
      <Grid item><Link color="alt">Alt</Link></Grid>
      <Grid item><Link color="disabled">Disabled</Link></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item className="fill--white"><Link color="contrast">Contrast</Link></Grid>
      <Grid item className="fill--white"><Link color="contrastAlt">Contrast alt</Link></Grid>
      <Grid item className="fill--white"><Link color="contrastDisabled">Contrast disabled</Link></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Link color="primary">Primary</Link></Grid>
      <Grid item><Link color="secondary">Secondary</Link></Grid>
      <Grid item><Link color="highlight">Highlight</Link></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Link color="success">Success</Link></Grid>
      <Grid item><Link color="info">Info</Link></Grid>
      <Grid item><Link color="warning">Warning</Link></Grid>
      <Grid item><Link color="error">Error</Link></Grid>
    </Grid>
  </Grid>
)

Color.parameters = {
  docs: {
    description: {
      story: 'Overrides the link color, which by default inherits the parent container color.'
    }
  }
}
