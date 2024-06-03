import React from 'react'
import { CalendarBlank } from '@phosphor-icons/react'

import { Checkbox } from '../lib/components/Checkbox'
import { FormField } from '../lib/components/FormField'
import { Grid } from '../lib/components/Grid'
import { Radio } from '../lib/components/Radio'

export default {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Component for every form field type (it can handle regular text or number field types, but also radio buttons and checkboxes.'
      }
    }
  },
  argTypes: {
    onChange: { control: false },
    kind: {
      defaultValue: 'input',
      control: { type: 'select' }
    },
    icon:{ control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <FormField {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Label',
  placeholder: 'Placeholder'
}

export const Kind = () => (
  <Grid wrapper spacing={2} direction='column'>
    <Grid item><FormField kind="text" id="text" label="Text" /></Grid>
    <Grid item>
      <FormField kind="select" id="select" label="Select">
        <option value="1" >Option 1</option>
        <option value="2" >Option 2</option>
      </FormField>
    </Grid>
    <Grid item><FormField kind="textarea" id="textarea" label="Textarea" rows="3" /></Grid>
    <Grid item>
      <FormField kind="radio" id="radio" label="Radio">
        <Radio name="radio" id="radio_1" value="1" label="Option 1" />
        <Radio name="radio" id="radio_2" value="2" label="Option 2" />
      </FormField>
    </Grid>
    <Grid item>
      <FormField kind="checkbox" id="checkbox" label="Checkbox">
        <Checkbox id="checkbox_1" value="1" label="Option 1" />
        <Checkbox id="checkbox_2" value="2" label="Option 2" />
      </FormField>
    </Grid>
  </Grid>
)

export const CustomIcon = () => (
  <FormField id="icon" label="Custom icon" icon={<CalendarBlank />} />
)

export const Direction = () => (
  <Grid wrapper spacing={2} direction='column'>
    <Grid item>
      <FormField kind="checkbox" id="landscape" label="Landscape" direction="landscape">
        <Checkbox id="landscape_1" value="1" label="Option 1" />
        <Checkbox id="landscape_2" value="2" label="Option 2" />
        <Checkbox id="landscape_3" value="3" label="Option 3" />
      </FormField>
    </Grid>
    <Grid item>
      <FormField kind="checkbox" id="portrait" label="Portrait" direction="portrait">
        <Checkbox id="portrait_1" value="1" label="Option 1" />
        <Checkbox id="portrait_2" value="2" label="Option 2" />
        <Checkbox id="portrait_3" value="3" label="Option 3" />
      </FormField>
    </Grid>
  </Grid>
)

Direction.parameters = {
  docs: {
    description: {
      story: 'Used only for radio buttons and checkboxes.'
    }
  }
}

export const IsFocused = () => (
  <FormField id="isFocused" label="IsFocused" focus />
)

export const Error = () => (
  <FormField id="error" label="Error" error />
)

export const Disabled = () => (
  <FormField id="disabled" label="Disabled" disabled />
)

export const Required = () => (
  <FormField id="required" label="Required" required />
)
