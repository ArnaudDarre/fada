import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { FormField } from '../lib/components/FormField'
import { Grid } from '../lib/components/Grid'
import { SelectOption } from '../lib/components/SelectOption'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Forms/SelectOption',
  component: SelectOption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Defines an option in a select list.'
      }
    }
  },
  argTypes: {
    className: { control: { type: null } }
  }
}

const Template = (args) => <SelectOption {...args} />

export const Playground = Template.bind({})

Playground.args = {
  value: 'select-option',
  children: 'Select option',
  disabled: false
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">selected</Text>}
              subtitle="If you want to pre-select an option, use `defaultValue` or `value` props on FormField instead of setting `selected` on SelectOption."
            />
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">disabled</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="disabled" dense /></Grid>
                <Grid item>
                  <FormField kind="select" id="disabled" label="Disabled">
                    <SelectOption value="2" >Option 1</SelectOption>
                    <SelectOption value="disabled" disabled>Option disabled</SelectOption>
                    <SelectOption value="2" >Option 3</SelectOption>
                  </FormField>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">group</Text>}
              subtitle="Group related SelectOptions. When that prop is set to true, the content is set in a label prop."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="group" dense /></Grid>
                <Grid item>
                  <FormField kind="select" id="group" label="Group">
                    <SelectOption group label="Group" >
                      <SelectOption value="1" >Option 1</SelectOption>
                      <SelectOption value="2" >Option 2</SelectOption>
                    </SelectOption>
                    <SelectOption group label="Group 2" >
                      <SelectOption value="3" >Option 3</SelectOption>
                      <SelectOption value="4" >Option 4</SelectOption>
                      <SelectOption value="5" >Option 5</SelectOption>
                    </SelectOption>
                  </FormField>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
