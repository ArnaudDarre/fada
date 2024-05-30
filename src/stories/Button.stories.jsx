import React from 'react'
import { Coffee, Moon, Sun } from 'react-feather'

import { Button } from '../lib/components/Button'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Component for every call-to-action.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/bEeQ97jqZFWepD0x4oU5k7/Pallote?type=design&node-id=509%3A521&mode=design&t=pkiurd7JUEb1noxg-1'
    }
  },
  argTypes: {
    color: { defaultValue: 'primary' },
    size: { defaultValue: 'md' },
    kind: { defaultValue: 'text' },
    variant: { defaultValue: 'fill' },
    component: { defaultValue: 'button' },
    fullWidth: { defaultValue: false },
    disabled: { defaultValue: false },
    iconLeft: { control: false },
    iconRight: { control: false },
    isTransparent: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Button {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Button'
}

export const Kind = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Button>Text</Button></Grid>
    <Grid item><Button kind="icon"><Coffee /></Button></Grid>
  </Grid>
)

Kind.parameters = {
  docs: {
    description: {
      story: 'Set the button content type.'
    }
  }
}

export const Variant = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Button>Fill</Button></Grid>
    <Grid item><Button variant="stroke">Stroke</Button></Grid>
    <Grid item><Button variant="transparent">Transparent</Button></Grid>
  </Grid>
)

Variant.parameters = {
  docs: {
    description: {
      story: 'Change the button style.'
    }
  }
}

export const Size = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Button size="xs">XSmall</Button></Grid>
    <Grid item><Button size="sm">Small</Button></Grid>
    <Grid item><Button>Medium</Button></Grid>
    <Grid item><Button size="lg">Large</Button></Grid>
  </Grid>
)

export const Color = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Button>Primary</Button></Grid>
    <Grid item><Button color="secondary">Secondary</Button></Grid>
    <Grid item><Button color="highlight">highlight</Button></Grid>
    <Grid item><Button color="success">Success</Button></Grid>
    <Grid item><Button color="info">Info</Button></Grid>
    <Grid item><Button color="warning">Warning</Button></Grid>
    <Grid item><Button color="error">Error</Button></Grid>
    <Grid item><Button color="default">Default</Button></Grid>
    <Grid item><Button color="contrast">Contrast</Button></Grid>
    <Grid item><Button color="grey">Grey</Button></Grid>
  </Grid>
)

export const Fulwidth = () => (
  <Button fullWidth>Full width</Button>
)

export const Disabled = () => (
  <Button disabled>Disabled</Button>
)

Disabled.parameters = {
  docs: {
    description: {
      story: 'Prevent users from clicking the button and change its styling and hover state accordingly.'
    }
  }
}

export const Icons = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Button iconLeft={<Sun />}>Icon left</Button></Grid>
    <Grid item><Button iconRight={<Moon />}>Icon right</Button></Grid>
    <Grid item><Button iconLeft={<Sun />} iconRight={<Moon />}>Icon left and right</Button></Grid>
  </Grid>
)

Icons.parameters = {
  docs: {
    description: {
      story: 'Add icons to the left or right of the content with the `iconLeft` and `iconRight` props.'
    }
  }
}
