import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Layer } from '../lib/components/Layer'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import { ColorsFull } from '../lib/types'

export default {
  title: 'Utilities/Layer',
  component: Layer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    fill: {
      defaultValue: 'primary',
      options: ColorsFull,
      table: { type: { summary: ColorsFull } }
    },
    stroke: {
      defaultValue: 'primary',
      options: ColorsFull,
      table: { type: { summary: ColorsFull } }
    },
    custom: { control: 'color' },
    wrapper: { defaultValue: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Layer {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <Text variant="caption">Layer</Text>
  )
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">fill</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item col={12}><Text variant="body">Common</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'black'" dense></Snippet></Grid>
                  <Grid item><Layer fill="black" className={'p-1'}><Text variant="caption">Black</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'white'" dense></Snippet></Grid>
                  <Grid item><Layer fill="white" className={'p-1'}><Text variant="caption">White</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Greys</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-90'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-90" className={'p-1'}><Text variant="caption">Grey 90</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-80'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-80" className={'p-1'}><Text variant="caption">Grey 80</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-70'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-70" className={'p-1'}><Text variant="caption">Grey 70</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-60'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-60" className={'p-1'}><Text variant="caption">Grey 60</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-50'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-50" className={'p-1'}><Text variant="caption">Grey 50</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-40'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-40" className={'p-1'}><Text variant="caption">Grey 40</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-30'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-30" className={'p-1'}><Text variant="caption">Grey 30</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-20'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-20" className={'p-1'}><Text variant="caption">Grey 20</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-10'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-10" className={'p-1'}><Text variant="caption">Grey 10</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'grey-5'" dense></Snippet></Grid>
                  <Grid item><Layer fill="grey-5" className={'p-1'}><Text variant="caption">Grey 5</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Misc</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'background'" dense></Snippet></Grid>
                  <Grid item><Layer fill="background" className={'p-1'}><Text variant="caption">Background</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'paper'" dense></Snippet></Grid>
                  <Grid item><Layer fill="paper" className={'p-1'}><Text variant="caption">Paper</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Brand</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'primary'" dense></Snippet></Grid>
                  <Grid item><Layer fill="primary" className={'p-1'}><Text variant="caption">Primary</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'secondary'" dense></Snippet></Grid>
                  <Grid item><Layer fill="secondary" className={'p-1'}><Text variant="caption">Secondary</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'highlight'" dense></Snippet></Grid>
                  <Grid item><Layer fill="highlight" className={'p-1'}><Text variant="caption">Highlight</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Feedback</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'success'" dense></Snippet></Grid>
                  <Grid item><Layer fill="success" className={'p-1'}><Text variant="caption">Success</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'info'" dense></Snippet></Grid>
                  <Grid item><Layer fill="info" className={'p-1'}><Text variant="caption">Info</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'warning'" dense></Snippet></Grid>
                  <Grid item><Layer fill="warning" className={'p-1'}><Text variant="caption">Warning</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fill'error'" dense></Snippet></Grid>
                  <Grid item><Layer fill="error" className={'p-1'}><Text variant="caption">Error</Text></Layer></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">stroke</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item col={12}><Text variant="body">Common</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'black'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="black" className={'p-1'}><Text variant="caption">Black</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'white'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="white" className={'p-1'}><Text variant="caption">White</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Greys</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-90'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-90" className={'p-1'}><Text variant="caption">Grey 90</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-80'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-80" className={'p-1'}><Text variant="caption">Grey 80</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-70'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-70" className={'p-1'}><Text variant="caption">Grey 70</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-60'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-60" className={'p-1'}><Text variant="caption">Grey 60</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-50'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-50" className={'p-1'}><Text variant="caption">Grey 50</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-40'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-40" className={'p-1'}><Text variant="caption">Grey 40</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-30'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-30" className={'p-1'}><Text variant="caption">Grey 30</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-20'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-20" className={'p-1'}><Text variant="caption">Grey 20</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-10'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-10" className={'p-1'}><Text variant="caption">Grey 10</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'grey-5'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="grey-5" className={'p-1'}><Text variant="caption">Grey 5</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Misc</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'background'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="background" className={'p-1'}><Text variant="caption">Background</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'paper'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="paper" className={'p-1'}><Text variant="caption">Paper</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Brand</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'primary'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="primary" className={'p-1'}><Text variant="caption">Primary</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'secondary'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="secondary" className={'p-1'}><Text variant="caption">Secondary</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'highlight'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="highlight" className={'p-1'}><Text variant="caption">Highlight</Text></Layer></Grid>
                </Grid>
                <Grid item col={12}><Text variant="body">Feedback</Text></Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'success'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="success" className={'p-1'}><Text variant="caption">Success</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'info'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="info" className={'p-1'}><Text variant="caption">Info</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'warning'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="warning" className={'p-1'}><Text variant="caption">Warning</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="stroke'error'" dense></Snippet></Grid>
                  <Grid item><Layer stroke="error" className={'p-1'}><Text variant="caption">Error</Text></Layer></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">custom</Text>}
              subtitle="boolean prop to enter a custom value in the fill or stroke props (or both)."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="custom fill='#8C8C96'" dense /></Grid>
                  <Grid item><Layer custom fill="#C6882C" className={'p-1'}><Text variant="caption">Error</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="custom stroke='#007BFF'" dense /></Grid>
                  <Grid item><Layer custom stroke="#007BFF" className={'p-1'}><Text variant="caption">Error</Text></Layer></Grid>
                </Grid>
                <Grid item wrapper col={6} spacing={1} direction="column">
                  <Grid item><Snippet content="custom fill='#8C8C96' stroke='#007BFF'" dense /></Grid>
                  <Grid item><Layer custom fill="#C6882C" stroke="#007BFF" className={'p-1'}><Text variant="caption">Error</Text></Layer></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">fullWidth</Text>}
            />
            <CardContent>
              <Grid wrapper col={3} spacing={1} direction="column">
                <Grid item><Snippet content="fullWidth" dense /></Grid>
                <Grid item><Layer fill="primary" fullWidth className={'p-1'}><Text variant="caption">Full width</Text></Layer></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">hasHover</Text>}
              subtitle="Add background color effect on hover (use for buttons)."
            />
            <CardContent>
              <Grid wrapper col={3} spacing={1} direction="column">
                <Grid item><Snippet content="hasHover" dense /></Grid>
                <Grid item><Layer fill="primary" hasHover className={'p-1'}><Text variant="caption">Has hover effect</Text></Layer></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">disabled</Text>}
              subtitle="Remove hover background color effect (use for disabled buttons)."
            />
            <CardContent>
              <Grid wrapper col={3} spacing={1} direction="column">
                <Grid item><Snippet content="hasHover disabled" dense /></Grid>
                <Grid item><Layer fill="primary" hasHover disabled className={'p-1'}><Text variant="caption">Removes hover effect</Text></Layer></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
