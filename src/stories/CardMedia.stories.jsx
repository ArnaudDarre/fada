import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { CardMedia } from '../lib/components/CardMedia'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import { SizeFull } from '../lib/types'

export default {
  title: 'Components/Layout/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for an image illustrating the card, for example on a blog page.'
      }
    }
  },
  argTypes: {
    borderRadius: {
      defaultValue: 'md',
      options: SizeFull,
      table: { type: { summary: SizeFull } }
    },
    fullWidth: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <CardMedia {...args} />

export const Playground = Template.bind({})

Playground.args = {
  height: '200px',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={
                <>
                  <Text code component="span">height</Text>
                  {' and '}
                  <Text code component="span">width</Text>
                </>
              }
              subtitle="Manually sets the height or width of the image (the opposite direction being automatically set to 100%)."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={6} spacing={1} direction="column">
                  <Grid item><Snippet content="height='200'" dense /></Grid>
                  <Grid item>
                    <Card>
                      <CardMedia height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                      <CardHeader
                        title="With card portrait"
                        subtitle="Width is automatically 100%"
                      />
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={6} spacing={1} direction="column">
                  <Grid item><Snippet content="width='200'" dense /></Grid>
                  <Grid item>
                    <Card direction="landscape">
                      <CardMedia width={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                      <CardHeader
                        title="With card landscape"
                        subtitle="Height is automatically 100%"
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">borderRadius</Text>}
              subtitle="Overrides the border radius of the image. This is mostly useful when the Card parent has a property of noPadding."
            />
            <CardContent>
              <Grid wrapper spacing={2} inline>
                <Grid item wrapper flexGrow={1} spacing={1} direction="column">
                  <Grid item><Snippet content="borderRadius='xs'" dense /></Grid>
                  <Grid item>
                    <Card noPadding>
                      <CardMedia fullWidth borderRadius="xs" height={100} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper flexGrow={1} spacing={1} direction="column">
                  <Grid item><Snippet content="borderRadius='sm'" dense /></Grid>
                  <Grid item>
                    <Card noPadding>
                      <CardMedia fullWidth borderRadius="sm" height={100} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper flexGrow={1} spacing={1} direction="column">
                  <Grid item><Snippet content="borderRadius='md'" dense /></Grid>
                  <Grid item>
                    <Card noPadding>
                      <CardMedia fullWidth borderRadius="md" height={100} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper flexGrow={1} spacing={1} direction="column">
                  <Grid item><Snippet content="borderRadius='lg'" dense /></Grid>
                  <Grid item>
                    <Card noPadding>
                      <CardMedia fullWidth borderRadius="lg" height={100} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper flexGrow={1} spacing={1} direction="column">
                  <Grid item><Snippet content="borderRadius='xl'" dense /></Grid>
                  <Grid item>
                    <Card noPadding>
                      <CardMedia fullWidth borderRadius="xl" height={100} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                    </Card>
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
              subtitle="Like the CardContent fullWidth prop, removes the bleed around the image."
            />
            <CardContent>
              <Grid wrapper col={6} spacing={1} direction="column">
                <Grid item><Snippet content="fullWidth" dense /></Grid>
                <Grid item>
                  <Card>
                    <CardMedia fullWidth height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
                    <CardHeader
                      title="Full width"
                    />
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
