import React from 'react'
import { Calendar } from 'react-feather'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Checkbox } from '../lib/components/Checkbox'
import { FormField } from '../lib/components/FormField'
import { Grid } from '../lib/components/Grid'
import { Radio } from '../lib/components/Radio'
import { SelectOption } from '../lib/components/SelectOption'
import { Snippet } from '../lib/components/Snippet'
import { Switch } from '../lib/components/Switch'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Forms/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Component for every form field type (it can handle regular text or number field types, but also radio buttons and checkboxes, switches, etc.'
      }
    }
  },
  argTypes: {
    onChange: { control: { type: null } },
    kind: {
      defaultValue: 'input',
      control: { type: 'select' }
    },
    id: { defaultValue: 'test' },
    placeholder: { defaultValue: '' },
    label: { defaultValue: 'Label' },
    notice: { defaultValue: '' },
    customIcon:{ control: { type: null } },
    direction: { defaultValue: 'landscape' },
    disabled: { defaultValue: false },
    error: { defaultValue: false },
    onFocus:{ control: { type: null } },
    onBlur:{ control: { type: null } },
    children:{ control: { type: null } },
    className: { control: { type: null } }
  }
}

const Template = (args) => <FormField {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Label',
  placeholder: 'Placeholder'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">kind</Text>}
              subtitle="These are the different types of fields you can use."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='text'" isDefault dense /></Grid>
                  <Grid item>
                    <FormField kind="text" id="text" label="Text" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='select'" dense /></Grid>
                  <Grid item>
                    <FormField kind="select" id="select" label="Select">
                      <SelectOption value="1" >Option 1</SelectOption>
                      <SelectOption value="2" >Option 2</SelectOption>
                    </FormField>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='textarea'" dense /></Grid>
                  <Grid item>
                    <FormField kind="textarea" id="textarea" label="Textarea" rows="3" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='radio'" dense /></Grid>
                  <Grid item>
                    <FormField kind="radio" id="radio" label="Radio">
                      <Radio name="radio" id="radio_1" value="1" defaultChecked label="Option 1" />
                      <Radio name="radio" id="radio_2" value="2" label="Option 2" />
                    </FormField>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='checkbox'" dense /></Grid>
                  <Grid item>
                    <FormField kind="checkbox" id="checkbox" label="Checkbox">
                      <Checkbox id="checkbox_1" value="1" label="Option 1" />
                      <Checkbox id="checkbox_2" value="2" label="Option 2" />
                    </FormField>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='switch'" dense /></Grid>
                  <Grid item>
                    <FormField kind="switch" id="switch" label="Switch">
                      <Switch id="switch" />
                    </FormField>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">customIcon</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="customIcon={ {/* insert object */} }" dense /></Grid>
                <Grid item>
                  <FormField id="icon" label="Custom icon" customIcon={<Calendar />} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">direction</Text>}
              subtitle="Used only for radio buttons and checkboxes."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='landscape'" isDefault dense /></Grid>
                  <Grid item>
                    <FormField kind="checkbox" id="landscape" label="Landscape" direction="landscape">
                      <Checkbox id="landscape_1" value="1" label="Option 1" />
                      <Checkbox id="landscape_2" value="2" label="Option 2" />
                      <Checkbox id="landscape_3" value="3" label="Option 3" />
                    </FormField>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='portrait'" dense /></Grid>
                  <Grid item>
                    <FormField kind="checkbox" id="portrait" label="Portrait" direction="portrait">
                      <Checkbox id="portrait_1" value="1" label="Option 1" />
                      <Checkbox id="portrait_2" value="2" label="Option 2" />
                      <Checkbox id="portrait_3" value="3" label="Option 3" />
                    </FormField>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
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
                  <FormField id="disabled" label="Disabled" disabled />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">error</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="error" dense /></Grid>
                <Grid item>
                  <FormField id="error" label="Error" error />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">dense</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="dense" dense /></Grid>
                <Grid item>
                  <FormField id="dense" label="Dense" dense />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
