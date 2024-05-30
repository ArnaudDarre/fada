import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Grid',
  component: Grid,
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

const Template = (args) => <Grid wrapper {...args} />

export const Playground = Template.bind({})

Playground.args = {
  spacing: 1,
  children: (
    <>
      <Grid item><Snippet content="Child 1" /></Grid>
      <Grid item><Snippet content="Child 2" /></Grid>
      <Grid item><Snippet content="Child 3" /></Grid>
    </>
  )
}

const exampleSnippet = (
  <>
    <Grid item><Snippet content="1" dense /></Grid>
    <Grid item><Snippet content="2" dense /></Grid>
    <Grid item><Snippet content="3" dense /></Grid>
  </>
)

const exampleText = (
  <>
    <Grid item><Text variant="h6" code>1</Text></Grid>
    <Grid item><Text variant="h2" code>2</Text></Grid>
    <Grid item><Text variant="overline" code>3</Text></Grid>
  </>
)

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid wrapper spacing={2}>
      <Grid item wrapper sm={3} spacing={1} direction="column">
        <Grid item><Snippet content="direction='column'" dense /></Grid>
        <Grid item wrapper spacing={1} direction="column">{exampleSnippet}</Grid>
      </Grid>
      <Grid item wrapper sm={3} spacing={1} direction="column">
        <Grid item><Snippet content="direction='columnReverse'" dense /></Grid>
        <Grid item wrapper spacing={1} direction="columnReverse">{exampleSnippet}</Grid>
      </Grid>
      <Grid item wrapper sm={3} spacing={1} direction="column">
        <Grid item><Snippet content="direction='row'" isDefault dense /></Grid>
        <Grid item wrapper spacing={1} direction="row">{exampleSnippet}</Grid>
      </Grid>
      <Grid item wrapper sm={3} spacing={1} direction="column">
        <Grid item><Snippet content="direction='rowReverse'" dense /></Grid>
        <Grid item wrapper spacing={1} direction="rowReverse">{exampleSnippet}</Grid>
      </Grid>
    </Grid>
  </Grid>
)

export const JustifyContent = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="justifyContent='center'" dense /></Grid>
      <Grid item wrapper spacing={1} justifyContent="center">{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="justifyContent='end'" dense /></Grid>
      <Grid item wrapper spacing={1} justifyContent="end">{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="justifyContent='start'" dense /></Grid>
      <Grid item wrapper spacing={1} justifyContent="start">{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="justifyContent='spaceAround'" dense /></Grid>
      <Grid item wrapper spacing={1} justifyContent="spaceAround">{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="justifyContent='spaceBetween'" dense /></Grid>
      <Grid item wrapper spacing={1} justifyContent="spaceBetween">{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="justifyContent='spaceEvenly'" dense /></Grid>
      <Grid item wrapper spacing={1} justifyContent="spaceEvenly">{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const AlignItems = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignItems='stretch'" dense /></Grid>
      <Grid item wrapper spacing={1} alignItems="stretch">{exampleText}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignItems='center'" dense /></Grid>
      <Grid item wrapper spacing={1} alignItems="center">{exampleText}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignItems='end'" dense /></Grid>
      <Grid item wrapper spacing={1} alignItems="end">{exampleText}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignItems='start'" dense /></Grid>
      <Grid item wrapper spacing={1} alignItems="start">{exampleText}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignItems='baseline'" dense /></Grid>
      <Grid item wrapper spacing={1} alignItems="baseline">{exampleText}</Grid>
    </Grid>
  </Grid>
)

export const AlignSelf = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignSelf='stretch'" dense /></Grid>
      <Grid item alignSelf="stretch">
        <Snippet content="1" />
      </Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignSelf='center'" dense /></Grid>
      <Grid item alignSelf="center">
        <Snippet content="1" />
      </Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignSelf='end'" dense /></Grid>
      <Grid item alignSelf="end">
        <Snippet content="1" />
      </Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignSelf='start'" dense /></Grid>
      <Grid item alignSelf="start">
        <Snippet content="1" />
      </Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="alignSelf='baseline'" dense /></Grid>
      <Grid item alignSelf="baseline">
        <Snippet content="1" />
      </Grid>
    </Grid>
  </Grid>
)

export const FlexGrow = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="flexGrow='0'" dense /></Grid>
      <Grid item flexGrow="0">
        <Snippet content="0" />
      </Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="flexGrow='1'" dense /></Grid>
      <Grid item flexGrow="1">
        <Snippet content="1" />
      </Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="flexGrow='auto'" dense /></Grid>
      <Grid item flexGrow="auto">
        <Snippet content="auto" />
      </Grid>
    </Grid>
  </Grid>
)

export const Spacing = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={1}" dense /></Grid>
      <Grid item wrapper spacing={1}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={2}" dense /></Grid>
      <Grid item wrapper spacing={2}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={3}" dense /></Grid>
      <Grid item wrapper spacing={3}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={4}" dense /></Grid>
      <Grid item wrapper spacing={4}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={5}" dense /></Grid>
      <Grid item wrapper spacing={5}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={6}" dense /></Grid>
      <Grid item wrapper spacing={6}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={7}" dense /></Grid>
      <Grid item wrapper spacing={7}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={8}" dense /></Grid>
      <Grid item wrapper spacing={8}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={9}" dense /></Grid>
      <Grid item wrapper spacing={9}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={10}" dense /></Grid>
      <Grid item wrapper spacing={10}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={11}" dense /></Grid>
      <Grid item wrapper spacing={11}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item wrapper sm={4} spacing={1} direction="column">
      <Grid item><Snippet content="spacing={12}" dense /></Grid>
      <Grid item wrapper spacing={12}>{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const XS = () => (
  <Grid wrapper spacing={2}>
    <Grid item xs={1}><Snippet content="xs={1}" dense /></Grid>
    <Grid item xs={2}><Snippet content="xs={2}" dense /></Grid>
    <Grid item xs={3}><Snippet content="xs={3}" dense /></Grid>
    <Grid item xs={4}><Snippet content="xs={4}" dense /></Grid>
    <Grid item xs={5}><Snippet content="xs={5}" dense /></Grid>
    <Grid item xs={6}><Snippet content="xs={6}" dense /></Grid>
    <Grid item xs={7}><Snippet content="xs={7}" dense /></Grid>
    <Grid item xs={8}><Snippet content="xs={8}" dense /></Grid>
    <Grid item xs={9}><Snippet content="xs={9}" dense /></Grid>
    <Grid item xs={10}><Snippet content="xs={10}" dense /></Grid>
    <Grid item xs={11}><Snippet content="xs={11}" dense /></Grid>
    <Grid item xs={12}><Snippet content="xs={12}" dense /></Grid>
  </Grid>
)

export const SM = () => (
  <Grid wrapper spacing={2}>
    <Grid item sm={1}><Snippet content="sm={1}" dense /></Grid>
    <Grid item sm={2}><Snippet content="sm={2}" dense /></Grid>
    <Grid item sm={3}><Snippet content="sm={3}" dense /></Grid>
    <Grid item sm={4}><Snippet content="sm={4}" dense /></Grid>
    <Grid item sm={5}><Snippet content="sm={5}" dense /></Grid>
    <Grid item sm={6}><Snippet content="sm={6}" dense /></Grid>
    <Grid item sm={7}><Snippet content="sm={7}" dense /></Grid>
    <Grid item sm={8}><Snippet content="sm={8}" dense /></Grid>
    <Grid item sm={9}><Snippet content="sm={9}" dense /></Grid>
    <Grid item sm={10}><Snippet content="sm={10}" dense /></Grid>
    <Grid item sm={11}><Snippet content="sm={11}" dense /></Grid>
    <Grid item sm={12}><Snippet content="sm={12}" dense /></Grid>
  </Grid>
)

export const MD = () => (
  <Grid wrapper spacing={2}>
    <Grid item md={1}><Snippet content="md={1}" dense /></Grid>
    <Grid item md={2}><Snippet content="md={2}" dense /></Grid>
    <Grid item md={3}><Snippet content="md={3}" dense /></Grid>
    <Grid item md={4}><Snippet content="md={4}" dense /></Grid>
    <Grid item md={5}><Snippet content="md={5}" dense /></Grid>
    <Grid item md={6}><Snippet content="md={6}" dense /></Grid>
    <Grid item md={7}><Snippet content="md={7}" dense /></Grid>
    <Grid item md={8}><Snippet content="md={8}" dense /></Grid>
    <Grid item md={9}><Snippet content="md={9}" dense /></Grid>
    <Grid item md={10}><Snippet content="md={10}" dense /></Grid>
    <Grid item md={11}><Snippet content="md={11}" dense /></Grid>
    <Grid item md={12}><Snippet content="md={12}" dense /></Grid>
  </Grid>
)

export const LG = () => (
  <Grid wrapper spacing={2}>
    <Grid item lg={1}><Snippet content="lg={1}" dense /></Grid>
    <Grid item lg={2}><Snippet content="lg={2}" dense /></Grid>
    <Grid item lg={3}><Snippet content="lg={3}" dense /></Grid>
    <Grid item lg={4}><Snippet content="lg={4}" dense /></Grid>
    <Grid item lg={5}><Snippet content="lg={5}" dense /></Grid>
    <Grid item lg={6}><Snippet content="lg={6}" dense /></Grid>
    <Grid item lg={7}><Snippet content="lg={7}" dense /></Grid>
    <Grid item lg={8}><Snippet content="lg={8}" dense /></Grid>
    <Grid item lg={9}><Snippet content="lg={9}" dense /></Grid>
    <Grid item lg={10}><Snippet content="lg={10}" dense /></Grid>
    <Grid item lg={11}><Snippet content="lg={11}" dense /></Grid>
    <Grid item lg={12}><Snippet content="lg={12}" dense /></Grid>
  </Grid>
)

export const XL = () => (
  <Grid wrapper spacing={2}>
    <Grid item xl={1}><Snippet content="xl={1}" dense /></Grid>
    <Grid item xl={2}><Snippet content="xl={2}" dense /></Grid>
    <Grid item xl={3}><Snippet content="xl={3}" dense /></Grid>
    <Grid item xl={4}><Snippet content="xl={4}" dense /></Grid>
    <Grid item xl={5}><Snippet content="xl={5}" dense /></Grid>
    <Grid item xl={6}><Snippet content="xl={6}" dense /></Grid>
    <Grid item xl={7}><Snippet content="xl={7}" dense /></Grid>
    <Grid item xl={8}><Snippet content="xl={8}" dense /></Grid>
    <Grid item xl={9}><Snippet content="xl={9}" dense /></Grid>
    <Grid item xl={10}><Snippet content="xl={10}" dense /></Grid>
    <Grid item xl={11}><Snippet content="xl={11}" dense /></Grid>
    <Grid item xl={12}><Snippet content="xl={12}" dense /></Grid>
  </Grid>
)
