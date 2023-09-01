import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Section } from '../lib/components/Section'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Layout/Section',
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
    className: { control: { type: null } },
    children: { control: { type: null } }
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
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='black'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="black"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='white'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="white"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='background'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="background"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='paper'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="paper"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='overlay'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="overlay"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='primary'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="primary"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='secondary'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="secondary"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="fill='highlight'" dense /></Grid>
                  <Grid item>
                    <Section
                      fill="highlight"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">align</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="align='left'" isDefault dense /></Grid>
                  <Grid item>
                    <Section
                      align="left"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="align='center'" dense /></Grid>
                  <Grid item>
                    <Section
                      align="center"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="align='right'" dense /></Grid>
                  <Grid item>
                    <Section
                      align="right"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">fullWidth</Text>}
              subtitle="remove the maw-width property (still keeps a small left and right padding to not touch the edge of the screen)."
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="fullWidth" dense /></Grid>
                <Grid item>
                  <Section
                    fullWidth
                    label="Food"
                    title="Edible mushrooms"
                    subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
