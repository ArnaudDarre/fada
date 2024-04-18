import React, { useState } from 'react'

import { Alert } from '../lib/components/Alert'
import { Button } from '../lib/components/Button'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Interactions/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    show: { control: { type: null } },
    onClose: { control: { type: null } },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Alert variant="notice" {...args} />

export const Playground = Template.bind({})

Playground.args = {
  title: 'This is an alert',
  onClose: null
}

export const Guide = Template.bind({})

Guide.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/bEeQ97jqZFWepD0x4oU5k7/Pallote?type=design&node-id=509%3A487&mode=design&t=bu8Veqiz0jYSbSHi-1'
  }
}

Guide.decorators = [
  () => {

    const [alerts, setAlerts] = useState({})

    const openAlert = (alertId) => {
      setAlerts((prevAlerts) => ({
        ...prevAlerts,
        [alertId]: true
      }))
    }

    const closeAlert = (alertId) => {
      setAlerts((prevAlerts) => ({
        ...prevAlerts,
        [alertId]: false
      }))
    }

    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">type</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="type='success'" isDefault dense /></Grid>
                  <Grid item>
                    <Alert type="success" title="Success" variant="notice" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="type='info'" dense /></Grid>
                  <Grid item>
                    <Alert type="info" title="Info" variant="notice" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="type='warning'" dense /></Grid>
                  <Grid item>
                    <Alert type="warning" title="Warning" variant="notice" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="type='error'" dense /></Grid>
                  <Grid item>
                    <Alert type="error" title="Error" variant="notice" />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">variant</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='toast'" isDefault dense /></Grid>
                  <Grid item>
                    <Button color="grey-40" onClick={() => openAlert('toast')}>Launch</Button>
                    <Alert variant="toast" title="Toast" show={alerts['toast']} />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='notice'" dense /></Grid>
                  <Grid item>
                    <Alert variant="notice" title="Notice" subtitle="Alert without absolute positionning to highlight important content on a page" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='bar'" dense /></Grid>
                  <Grid item>
                    <Button color="grey-40" onClick={() => openAlert('bar')}>Launch</Button>
                    <Alert variant="bar" title="Bar" show={alerts['bar']} />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">subtitle</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="subtitle={ /* insert string */ }" dense /></Grid>
                <Grid item>
                  <Alert variant="notice" title="Alert with content" subtitle="This is the content"></Alert>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">dense</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item>
                  <Alert variant="notice" dense title="This is the content"></Alert>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">onClose</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item>
                  <Button color="grey-40" onClick={() => openAlert('close')}>Launch</Button>
                  <Alert title="Alert with onClose function" show={alerts['close']} onClose={() => closeAlert('close')} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
