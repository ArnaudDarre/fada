import React from 'react'

import { TabsControl } from '../lib/components/TabsControl'
// import { Grid } from '../lib/components/Grid'
// import { Card } from '../lib/components/Card'
// import { CardContent } from '../lib/components/CardContent'
// import { CardHeader } from '../lib/components/CardHeader'

export default {
  title: 'Components/Navigation/🚧 TabsControl',
  component: TabsControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    tabs: { control: { type: null } },
    dense: { defaultValue: false },
    direction: { defaultValue: 'landscape' }
  }
}

const Template = (args) => <TabsControl {...args} />

export const Playground = Template.bind({})

Playground.args = {
  tabs: (
    { label: 'Profile' },
    { label: 'Password' },
    { label: 'Address' }
  ),
  activeTab: 'Profile'
}

export const Guide = Template.bind({})

// Guide.decorators = [
//   () => {
//     return (
//       <Grid wrapper spacing={6} direction="column">
//         <Grid item>
//           <Card noPadding transparent>
//             <CardHeader
//               title="Prop 1"
//               subtitle="This is the first prop description."
//             />
//             <CardContent>
//               <Grid wrapper spacing={2}>
//                 <Grid item>
//                   <TabsControl tabs={tabs} />
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     )
//   }
// ]
