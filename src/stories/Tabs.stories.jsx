import React from 'react'
import { Lock, MapPin, User } from 'react-feather'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Tabs } from '../lib/components/Tabs'
import { TabsContent } from '../lib/components/TabsContent'
import { TabsControl } from '../lib/components/TabsControl'

export default {
  title: 'Components/Navigation/🚧 Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    children: { control: { type: null } }
  }
}

const tabs = [
  { label: 'Profile', icon: <User /> },
  { label: 'Password', icon: <Lock /> },
  { label: 'Address', icon: <MapPin /> }
]

const Template = (args) => <Tabs {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <TabsContent tabs={tabs} />
      <TabsControl tabs={tabs} />
    </>
  ),
  activeTab: 'Profile'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title="Prop 1"
              subtitle="This is the first prop description."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item>
                  <TabsControl tabs={tabs} />
                  <TabsContent tabs={tabs} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
