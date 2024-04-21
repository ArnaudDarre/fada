import React from 'react'

import { Display } from '../lib/components/Display'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    show: { defaultValue:  true },
    hide: { defaultValue:  false },
    viewport: { defaultValue:  'desktop' },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Display {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <Card size="xs">
      <Snippet content="To see the component in action, change the props values and resize your screen" />
    </Card>
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
              title={<Text code component="span">show</Text>}
              subtitle={
                <>
                  Show the component depending on viewport width (needs to be paired with
                  <Text code component="span">viewport</Text>
                  prop).
                </>
              }
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="show viewport='mobile-sm'" dense /></Grid>
                  <Grid item>
                    <Display show viewport="mobile-sm">
                      <Snippet content="Show on mobile small" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="show viewport='mobile'" dense /></Grid>
                  <Grid item>
                    <Display show viewport="mobile">
                      <Snippet content="Show on mobile" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="show viewport='tablet'" dense /></Grid>
                  <Grid item>
                    <Display show viewport="tablet">
                      <Snippet content="Show on tablet" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="show viewport='laptop'" dense /></Grid>
                  <Grid item>
                    <Display show viewport="laptop">
                      <Snippet content="Show on laptop" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="show viewport='desktop'" dense /></Grid>
                  <Grid item>
                    <Display show viewport="desktop">
                      <Snippet content="Show on desktop" />
                    </Display>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">hide</Text>}
              subtitle={
                <>
                  Hide the component depending on viewport width (needs to be paired with
                  <Text code component="span">viewport</Text>
                  prop).
                </>
              }
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="hide viewport='mobile-sm'" dense /></Grid>
                  <Grid item>
                    <Display hide viewport="mobile-sm">
                      <Snippet content="Hide on mobile small" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="hide viewport='mobile'" dense /></Grid>
                  <Grid item>
                    <Display hide viewport="mobile">
                      <Snippet content="Hide on mobile" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="hide viewport='tablet'" dense /></Grid>
                  <Grid item>
                    <Display hide viewport="tablet">
                      <Snippet content="Hide on tablet" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="hide viewport='laptop'" dense /></Grid>
                  <Grid item>
                    <Display hide viewport="laptop">
                      <Snippet content="Hide on laptop" />
                    </Display>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="hide viewport='desktop'" dense /></Grid>
                  <Grid item>
                    <Display hide viewport="desktop">
                      <Snippet content="Hide on desktop" />
                    </Display>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">viewport</Text>}
              subtitle="Choose the breakpoint from which your will show or hide the component."
            />
            <CardContent>
              <Grid wrapper spacing={2} direction="column">
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="viewport='mobile-sm'" dense /></Grid>
                  <Grid item>
                    <Snippet content="375px" className="w-mobile-sm" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="viewport='mobile'" dense /></Grid>
                  <Grid item>
                    <Snippet content="576px" className="w-mobile" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="viewport='tablet'" dense /></Grid>
                  <Grid item>
                    <Snippet content="768px" className="w-tablet" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="viewport='laptop'" dense /></Grid>
                  <Grid item>
                    <Snippet content="1024px" className="w-laptop" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="viewport='desktop'" dense /></Grid>
                  <Grid item>
                    <Snippet content="1280px" className="w-desktop" />
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
