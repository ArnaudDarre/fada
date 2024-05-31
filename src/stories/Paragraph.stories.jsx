import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Paragraph } from '../lib/components/Paragraph'
import { Text } from '../lib/components/Text'

import ParagraphExample from './components/ParagraphExample'

export default {
  title: 'Utilities/Paragraph',
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
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Paragraph {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Text>This is a paragraph component. It is used to group text together.</Text>
      <Text>Any prop applied at the componet level will be applied to all Text child component.</Text>
    </>
  )
}

export const Variant = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Paragraph variant="h1"><ParagraphExample>h1</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="h2"><ParagraphExample>h2</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="h3"><ParagraphExample>h3</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="h4"><ParagraphExample>h4</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="h5"><ParagraphExample>h5</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="h6"><ParagraphExample>h6</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="subtitle"><ParagraphExample>Subtitle</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="body"><ParagraphExample>Body</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="caption"><ParagraphExample>Caption</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph variant="overline"><ParagraphExample>Overline</ParagraphExample></Paragraph></Grid>
  </Grid>
)

export const Align = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Paragraph align="left" className="w-100"><ParagraphExample>Left</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph align="center" className="w-100"><ParagraphExample>Center</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph align="right" className="w-100"><ParagraphExample>Right</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph align="justify" className="w-100"><ParagraphExample>Justify</ParagraphExample></Paragraph></Grid>
  </Grid>
)

export const Weight = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Paragraph weight="light"><ParagraphExample>Light</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph weight="regular"><ParagraphExample>Regular</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph weight="bold"><ParagraphExample>Bold</ParagraphExample></Paragraph></Grid>
  </Grid>
)

export const Underline = () => (
  <Paragraph underline><ParagraphExample>Underline</ParagraphExample></Paragraph>
)

export const Italic = () => (
  <Paragraph italic><ParagraphExample>Italic</ParagraphExample></Paragraph>
)

export const Color = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Paragraph color="default"><ParagraphExample>Default</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="alt"><ParagraphExample>Alt</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="disabled"><ParagraphExample>Disabled</ParagraphExample></Paragraph></Grid>
    <Grid item className="fill--white"><Paragraph color="contrast"><ParagraphExample>Contrast</ParagraphExample></Paragraph></Grid>
    <Grid item className="fill--white"><Paragraph color="contrastAlt"><ParagraphExample>Contrast alt</ParagraphExample></Paragraph></Grid>
    <Grid item className="fill--white"><Paragraph color="contrastDisabled"><ParagraphExample>Contrast disabled</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="primary"><ParagraphExample>Primary</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="secondary"><ParagraphExample>Secondary</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="highlight"><ParagraphExample>Highlight</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="success"><ParagraphExample>Success</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="info"><ParagraphExample>Info</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="warning"><ParagraphExample>Warning</ParagraphExample></Paragraph></Grid>
    <Grid item><Paragraph color="error"><ParagraphExample>Error</ParagraphExample></Paragraph></Grid>
  </Grid>
)
