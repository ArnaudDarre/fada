import React from 'react'

import { Checkbox } from '../lib/components/Checkbox'
import { Checkboxes } from '../lib/components/Checkboxes'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/Checkboxes',
  component: Checkboxes,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    onChange: { control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <Checkboxes {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Checkbox id="checkbox_1" value="1" label="Option 1" />
      <Checkbox id="checkbox_2" value="2" label="Option 2" />
    </>
  )
}

export const IsFocused = () => (
  <Checkboxes id="isFocused" label="IsFocused" focus>
    <Checkbox id="focused_1" value="1" label="Option 1" />
    <Checkbox id="focused_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Error = () => (
  <Checkboxes id="error" label="Error" error>
    <Checkbox id="error_1" value="1" label="Option 1" />
    <Checkbox id="error_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Disabled = () => (
  <Checkboxes id="disabled" label="Disabled" disabled>
    <Checkbox id="disabled_1" value="1" label="Option 1" />
    <Checkbox id="disabled_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Required = () => (
  <Checkboxes id="required" label="Required" required>
    <Checkbox id="required_1" value="1" label="Option 1" />
    <Checkbox id="required_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid item>
      <Checkboxes direction="landscape" id="landscape" label="Landscape">
        <Checkbox id="landscape_1" value="1" label="Option 1" />
        <Checkbox id="landscape_2" value="2" label="Option 2" />
      </Checkboxes>
    </Grid>
    <Grid item>
      <Checkboxes direction="portrait" id="portrait" label="Portrait">
        <Checkbox id="portrait_1" value="1" label="Option 1" />
        <Checkbox id="portrait_2" value="2" label="Option 2" />
      </Checkboxes>
    </Grid>
  </Grid>
)
