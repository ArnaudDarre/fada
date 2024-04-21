import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Layer } from '../lib/components/Layer'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import {
  AlignFull,
  ColorsText,
  TextVariant,
  TextWeight
} from '../lib/types'

export default {
  title: 'Utilities/Text',
  component: Text,
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
      defaultValue: '',
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
    gutter: { defaultValue: false },
    component: { defaultValue: 'p' },
    className: { control: { type: null } },
    children: { control: { type: 'text' } }
  }
}

const Template = (args) => <Text {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Text'
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
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h1'" dense /></Grid>
                  <Grid item>
                    <Text variant="h1">Headline 1</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h2'" dense /></Grid>
                  <Grid item>
                    <Text variant="h2">Headline 2</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h3'" dense /></Grid>
                  <Grid item>
                    <Text variant="h3">Headline 3</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h4'" dense /></Grid>
                  <Grid item>
                    <Text variant="h4">Headline 4</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h5'" dense /></Grid>
                  <Grid item>
                    <Text variant="h5">Headline 5</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='h6'" dense /></Grid>
                  <Grid item>
                    <Text variant="h6">Headline 6</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='subtitle'" dense /></Grid>
                  <Grid item>
                    <Text variant="subtitle">Subtitle</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='body'" isDefault dense /></Grid>
                  <Grid item>
                    <Text variant="body">Body</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='caption'" dense /></Grid>
                  <Grid item>
                    <Text variant="caption">Caption</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='overline'" dense /></Grid>
                  <Grid item>
                    <Text variant="overline">Overline</Text>
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
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='left'" isDefault dense /></Grid>
                  <Grid item>
                    <Text align="left" className="w-100">Mushrooms may be cooked before consumption. Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='center'" dense /></Grid>
                  <Grid item>
                    <Text align="center" className="w-100">Mushrooms may be cooked before consumption. Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='right'" dense /></Grid>
                  <Grid item>
                    <Text align="right" className="w-100">Mushrooms may be cooked before consumption. Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='justify'" dense /></Grid>
                  <Grid item>
                    <Text align="justify" className="w-100">Mushrooms may be cooked before consumption. Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
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
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="weight='light'" dense /></Grid>
                  <Grid item>
                    <Text weight="light">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="weight='regular'" isDefault dense /></Grid>
                  <Grid item>
                    <Text weight="regular">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="weight='bold'" dense /></Grid>
                  <Grid item>
                    <Text weight="bold">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">transform</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="transform='none'" dense /></Grid>
                  <Grid item>
                    <Text transform="none">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="transform='capitalize'" dense /></Grid>
                  <Grid item>
                    <Text transform="capitalize">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="transform='uppercase'" dense /></Grid>
                  <Grid item>
                    <Text transform="uppercase">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="transform='lowercase'" dense /></Grid>
                  <Grid item>
                    <Text transform="lowercase">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="transform='initial'" dense /></Grid>
                  <Grid item>
                    <Text transform="initial">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="transform='inherit'" dense /></Grid>
                  <Grid item>
                    <Text transform="inherit">Mushrooms may be cooked before consumption.</Text>
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
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="underline" dense /></Grid>
                <Grid item>
                  <Text underline>Underline</Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">italic</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="italic" dense /></Grid>
                <Grid item>
                  <Text italic>Italic</Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">code</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="code" dense /></Grid>
                <Grid item>
                  <Text code>Code</Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">color</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='default'" isDefault dense /></Grid>
                  <Grid item>
                    <Text color="default">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='alt'" dense /></Grid>
                  <Grid item>
                    <Text color="alt">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='disabled'" dense /></Grid>
                  <Grid item>
                    <Text color="disabled">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='contrast'" dense /></Grid>
                  <Grid item>
                    <Layer fill="white">
                      <Text color="contrast">Mushrooms may be cooked before consumption.</Text>
                    </Layer>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='contrast-alt'" dense /></Grid>
                  <Grid item>
                    <Layer fill="white">
                      <Text color="contrast-alt">Mushrooms may be cooked before consumption.</Text>
                    </Layer>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='contrast-disabled'" dense /></Grid>
                  <Grid item>
                    <Layer fill="white">
                      <Text color="contrast-disabled">Mushrooms may be cooked before consumption.</Text>
                    </Layer>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" dense /></Grid>
                  <Grid item>
                    <Text color="primary">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item>
                    <Text color="secondary">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='highlight'" dense /></Grid>
                  <Grid item>
                    <Text color="highlight">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='success'" dense /></Grid>
                  <Grid item>
                    <Text color="success">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='info'" dense /></Grid>
                  <Grid item>
                    <Text color="info">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='warning'" dense /></Grid>
                  <Grid item>
                    <Text color="warning">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='error'" dense /></Grid>
                  <Grid item>
                    <Text color="error">Mushrooms may be cooked before consumption.</Text>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">gutter</Text>}
              subtitle="Add a spacing under Text components (e.g. when you have multiple paragraphs)."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="gutter" dense /></Grid>
                  <Grid item>
                    <div>
                      <Text variant="" gutter>Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </div>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="gutter='false'" isDefault dense /></Grid>
                  <Grid item>
                    <div>
                      <Text variant="">Mushrooms may be cooked before consumption.</Text>
                      <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">component</Text>}
              subtitle="Change the html DOM element. This is completely independant from the variant styling (e.g. a h1 element can have an h3 styling)."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item col={4}><Snippet content="component='h1'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='h2'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='h3'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='h4'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='h5'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='h6'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='p'" isDefault dense /></Grid>
                <Grid item col={4}><Snippet content="component='span'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='label'" dense /></Grid>
                <Grid item col={4}><Snippet content="component='legend'" dense /></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
