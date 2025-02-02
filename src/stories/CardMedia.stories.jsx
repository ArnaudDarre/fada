import React from 'react'

import { Card } from '../lib/components/Card'
import { CardHeader } from '../lib/components/CardHeader'
import { CardMedia } from '../lib/components/CardMedia'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/CardMedia',
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
      defaultValue: 'md'
    },
    fullWidth: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <CardMedia {...args} />

export const Playground = Template.bind({})

Playground.args = {
  height: '200px',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg'
}

export const Height = () => (
  <Grid wrapper spacing={2}>
    <Grid item md={4} sm={12}>
      <Card>
        <CardMedia height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
        <CardHeader
          title="Override height"
        />
      </Card>
    </Grid>
  </Grid>
)

Height.parameters = {
  docs: {
    description: {
      story: 'Override the default height of the image.'
    }
  }
}

export const Width = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={12}>
      <Card direction="landscape">
        <CardMedia width={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
        <CardHeader
          title="Override width"
        />
      </Card>
    </Grid>
  </Grid>
)

Width.parameters = {
  docs: {
    description: {
      story: 'Override the default width of the image (when used on a Card with `direction="landscape"` prop).'
    }
  }
}

export const FullWidth = () => (
  <Grid wrapper spacing={2}>
    <Grid item md={4} sm={12}>
      <Card>
        <CardMedia fullWidth height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"></CardMedia>
        <CardHeader
          title="Full width"
        />
      </Card>
    </Grid>
  </Grid>
)
