import React from 'react'

import { Radio } from '../lib/components/Radio'
import { RadioButtons } from '../lib/components/RadioButtons'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/RadioButtons',
  component: RadioButtons,
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

const Template = (args) => <RadioButtons {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Radio name="checkbox" id="checkbox_1" value="1" label="Option 1" />
      <Radio name="checkbox" id="checkbox_2" value="2" label="Option 2" />
    </>
  )
}

export const IsFocused = () => (
  <RadioButtons id="isFocused" label="IsFocused" focus>
    <Radio name="focused" id="focused_1" value="1" label="Option 1" />
    <Radio name="focused" id="focused_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Error = () => (
  <RadioButtons id="error" label="Error" error>
    <Radio name="error" id="error_1" value="1" label="Option 1" />
    <Radio name="error" id="error_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Disabled = () => (
  <RadioButtons id="disabled" label="Disabled" disabled>
    <Radio name="disabled" id="disabled_1" value="1" label="Option 1" />
    <Radio name="disabled" id="disabled_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Required = () => (
  <RadioButtons id="required" label="Required" required>
    <Radio name="required" id="required_1" value="1" label="Option 1" />
    <Radio name="required" id="required_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid item>
      <RadioButtons direction="landscape" id="landscape" label="Landscape">
        <Radio name="landscape" id="landscape_1" value="1" label="Option 1" />
        <Radio name="landscape" id="landscape_2" value="2" label="Option 2" />
      </RadioButtons>
    </Grid>
    <Grid item>
      <RadioButtons direction="portrait" id="portrait" label="Portrait">
        <Radio name="portrait" id="portrait_1" value="1" label="Option 1" />
        <Radio name="portrait" id="portrait_2" value="2" label="Option 2" />
      </RadioButtons>
    </Grid>
  </Grid>
)
