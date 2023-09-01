import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Layer } from '../lib/components/Layer'
import { Paragraph } from '../lib/components/Paragraph'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import {
  AlignFull,
  ColorsText,
  TextVariant,
  TextWeight
} from '../lib/types'

export default {
  title: 'Components/Mixins/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    variant: {
      defaultValue: 'body',
      options: TextVariant,
      table: { type: { summary: TextVariant } }
    },
    align: {
      defaultValue: 'left',
      options: AlignFull,
      table: { type: { summary: AlignFull } }
    },
    weight: {
      defaultValue: 'regular',
      options: TextWeight,
      table: { type: { summary: TextWeight } }
    },
    underline: { defaultValue: false },
    italic: { defaultValue: false },
    color: {
      defaultValue: 'text',
      options: ColorsText,
      table: { type: { summary: ColorsText } }
    },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Paragraph {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Text>The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music’s recognition as an art form.</Text>
      <Text>Rooted in skiffle, beat and 1950s rock ’n’ roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock.</Text>
      <Text>As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era’s youth and sociocultural movements.</Text>
    </>
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
              title={<Text code component="span">variant</Text>}
              subtitle="Apply a variant styling to all Text children components."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h1'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="h1">
                      <Text>Headline 1</Text>
                      <Text>Headline 1</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h2'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="h2">
                      <Text>Headline 2</Text>
                      <Text>Headline 2</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h3'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="h3">
                      <Text>Headline 3</Text>
                      <Text>Headline 3</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h4'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="h4">
                      <Text>Headline 4</Text>
                      <Text>Headline 4</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h5'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="h5">
                      <Text>Headline 5</Text>
                      <Text>Headline 5</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h6'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="h6">
                      <Text>Headline 6</Text>
                      <Text>Headline 6</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='subtitle'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="subtitle">
                      <Text>Subtitle</Text>
                      <Text>Subtitle</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='body'" isDefault dense /></Grid>
                  <Grid item>
                    <Paragraph variant="body">
                      <Text>Body</Text>
                      <Text>Body</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='caption'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="caption">
                      <Text>Caption</Text>
                      <Text>Caption</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='overline'" dense /></Grid>
                  <Grid item>
                    <Paragraph variant="overline">
                      <Text>Overline</Text>
                      <Text>Overline</Text>
                    </Paragraph>
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
              subtitle="Apply an align value to all Text children components."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='left'" isDefault dense /></Grid>
                  <Grid item>
                    <Paragraph align="left">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='center'" dense /></Grid>
                  <Grid item>
                    <Paragraph align="center">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='right'" dense /></Grid>
                  <Grid item>
                    <Paragraph align="right">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='justify'" dense /></Grid>
                  <Grid item>
                    <Paragraph align="justify">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">weight</Text>}
              subtitle="Apply a weight to all Text children components."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="weight='light'" dense /></Grid>
                  <Grid item>
                    <Paragraph weight="light">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="weight='regular'" isDefault dense /></Grid>
                  <Grid item>
                    <Paragraph weight="regular">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="weight='bold'" dense /></Grid>
                  <Grid item>
                    <Paragraph weight="bold">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">underline</Text>}
              subtitle="Apply underline styling to all Text children components."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="underline" dense /></Grid>
                <Grid item>
                  <Paragraph underline>
                    <Text>Mushrooms may be cooked before consumption.</Text>
                    <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                  </Paragraph>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">italic</Text>}
              subtitle="Apply italic styling to all Text children components."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="italic" dense /></Grid>
                <Grid item>
                  <Paragraph italic>
                    <Text>Mushrooms may be cooked before consumption.</Text>
                    <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                  </Paragraph>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">color</Text>}
              subtitle="Apply a color to all Text children components."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='default'" isDefault dense /></Grid>
                  <Grid item>
                    <Paragraph color="default">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='alt'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="alt">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='disabled'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="disabled">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='contrast'" isDefault dense /></Grid>
                  <Grid item>
                    <Layer fill="white">
                      <Paragraph color="contrast">
                        <Text>Mushrooms may be cooked before consumption.</Text>
                        <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                      </Paragraph>
                    </Layer>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='contrast-alt'" dense /></Grid>
                  <Grid item>
                    <Layer fill="white">
                      <Paragraph color="contrast-alt">
                        <Text>Mushrooms may be cooked before consumption.</Text>
                        <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                      </Paragraph>
                    </Layer>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='contrast-disabled'" dense /></Grid>
                  <Grid item>
                    <Layer fill="white">
                      <Paragraph color="contrast-disabled">
                        <Text>Mushrooms may be cooked before consumption.</Text>
                        <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                      </Paragraph>
                    </Layer>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="primary">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="secondary">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='highlight'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="highlight">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='success'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="success">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='info'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="info">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='warning'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="warning">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='error'" dense /></Grid>
                  <Grid item>
                    <Paragraph color="error">
                      <Text>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </Paragraph>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
