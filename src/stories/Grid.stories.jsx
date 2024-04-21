import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
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
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Grid {...args} />

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

export const Guide = Template.bind({})

Guide.decorators = [
  () => {

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

    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">direction</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='column'" dense /></Grid>
                  <Grid item wrapper spacing={1} direction="column">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='column-reverse'" dense /></Grid>
                  <Grid item wrapper spacing={1} direction="column-reverse">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='row'" isDefault dense /></Grid>
                  <Grid item wrapper spacing={1} direction="row">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='row-reverse'" dense /></Grid>
                  <Grid item wrapper spacing={1} direction="row-reverse">{exampleSnippet}</Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">justifyContent</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="justifyContent='center'" dense /></Grid>
                  <Grid item wrapper spacing={1} justifyContent="center">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="justifyContent='flex-end'" dense /></Grid>
                  <Grid item wrapper spacing={1} justifyContent="flex-end">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="justifyContent='flex-start'" dense /></Grid>
                  <Grid item wrapper spacing={1} justifyContent="flex-start">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="justifyContent='space-around'" dense /></Grid>
                  <Grid item wrapper spacing={1} justifyContent="space-around">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="justifyContent='space-between'" dense /></Grid>
                  <Grid item wrapper spacing={1} justifyContent="space-between">{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="justifyContent='space-evenly'" dense /></Grid>
                  <Grid item wrapper spacing={1} justifyContent="space-evenly">{exampleSnippet}</Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">alignItems</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignItems='stretch'" dense /></Grid>
                  <Grid item wrapper spacing={1} alignItems="stretch">{exampleText}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignItems='center'" dense /></Grid>
                  <Grid item wrapper spacing={1} alignItems="center">{exampleText}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignItems='flex-end'" dense /></Grid>
                  <Grid item wrapper spacing={1} alignItems="flex-end">{exampleText}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignItems='flex-start'" dense /></Grid>
                  <Grid item wrapper spacing={1} alignItems="flex-start">{exampleText}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignItems='baseline'" dense /></Grid>
                  <Grid item wrapper spacing={1} alignItems="baseline">{exampleText}</Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">alignSelf</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignSelf='stretch'" dense /></Grid>
                  <Grid item alignSelf="stretch">
                    <Snippet content="1" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignSelf='center'" dense /></Grid>
                  <Grid item alignSelf="center">
                    <Snippet content="1" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignSelf='flex-end'" dense /></Grid>
                  <Grid item alignSelf="flex-end">
                    <Snippet content="1" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignSelf='flex-start'" dense /></Grid>
                  <Grid item alignSelf="flex-start">
                    <Snippet content="1" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="alignSelf='baseline'" dense /></Grid>
                  <Grid item alignSelf="baseline">
                    <Snippet content="1" />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">flexGrow</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="flexGrow='0'" dense /></Grid>
                  <Grid item flexGrow="0">
                    <Snippet content="0" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="flexGrow='1'" dense /></Grid>
                  <Grid item flexGrow="1">
                    <Snippet content="1" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="flexGrow='auto'" dense /></Grid>
                  <Grid item flexGrow="auto">
                    <Snippet content="auto" />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">col</Text>}
              subtitle="Apply a column width the an item element (the library uses 12 column grid)."
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item col={1}><Snippet content="col={1}" dense /></Grid>
                <Grid item col={2}><Snippet content="col={2}" dense /></Grid>
                <Grid item col={3}><Snippet content="col={3}" dense /></Grid>
                <Grid item col={4}><Snippet content="col={4}" dense /></Grid>
                <Grid item col={5}><Snippet content="col={5}" dense /></Grid>
                <Grid item col={6}><Snippet content="col={6}" dense /></Grid>
                <Grid item col={7}><Snippet content="col={7}" dense /></Grid>
                <Grid item col={8}><Snippet content="col={8}" dense /></Grid>
                <Grid item col={9}><Snippet content="col={9}" dense /></Grid>
                <Grid item col={10}><Snippet content="col={10}" dense /></Grid>
                <Grid item col={11}><Snippet content="col={11}" dense /></Grid>
                <Grid item col={12}><Snippet content="col={12}" dense /></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">spacing</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={1}" dense /></Grid>
                  <Grid item wrapper spacing={1}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={2}" dense /></Grid>
                  <Grid item wrapper spacing={2}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={3}" dense /></Grid>
                  <Grid item wrapper spacing={3}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={4}" dense /></Grid>
                  <Grid item wrapper spacing={4}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={5}" dense /></Grid>
                  <Grid item wrapper spacing={5}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={6}" dense /></Grid>
                  <Grid item wrapper spacing={6}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={7}" dense /></Grid>
                  <Grid item wrapper spacing={7}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={8}" dense /></Grid>
                  <Grid item wrapper spacing={8}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={9}" dense /></Grid>
                  <Grid item wrapper spacing={9}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={10}" dense /></Grid>
                  <Grid item wrapper spacing={10}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={11}" dense /></Grid>
                  <Grid item wrapper spacing={11}>{exampleSnippet}</Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing={12}" dense /></Grid>
                  <Grid item wrapper spacing={12}>{exampleSnippet}</Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
