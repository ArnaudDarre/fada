import React, { useState } from 'react'

import { Alert } from '../lib/components/Alert'
import { Button } from '../lib/components/Button'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/bEeQ97jqZFWepD0x4oU5k7/Pallote?type=design&node-id=509%3A487&mode=design&t=bu8Veqiz0jYSbSHi-1'
    }
  },
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

export const Type = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Alert title="Success" variant="notice" /></Grid>
    <Grid item><Alert type="info" title="Info" variant="notice" /></Grid>
    <Grid item><Alert type="warning" title="Warning" variant="notice" /></Grid>
    <Grid item><Alert type="error" title="Error" variant="notice" /></Grid>
  </Grid>
)

Type.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Convery the severity of the alert.'
    }
  }
}

export const Variant = () => {

  const [alerts, setAlerts] = useState({})

  const openAlert = (alertId) => {
    setAlerts((prevAlerts) => ({
      ...prevAlerts,
      [alertId]: true
    }))
  }

  return (
    <Grid wrapper spacing={2} direction="column">
      <Grid item alignItems="start">
        <Button color="primary" onClick={() => openAlert('toast')}>Open toast alert</Button>
        <Alert title="Toast" show={alerts['toast']} />
      </Grid>
      <Grid item alignItems="start">
        <Alert variant="notice" title="Notice" subtitle="Inlined alert without absolute positionning to highlight content on the page" />
      </Grid>
      <Grid item alignItems="start">
        <Button color="primary" onClick={() => openAlert('bar')}>Open bar alert</Button>
        <Alert variant="bar" title="Bar" show={alerts['bar']} />
      </Grid>
    </Grid>
  )
}

Variant.parameters = {
  controls: { disable: true }
}

export const Subtitle = () => (
  <Alert variant="notice" title="Alert with subtitle" subtitle="This is the subtitle"></Alert>
)

Subtitle.parameters = {
  controls: { disable: true }
}

export const Dense = () => (
  <Alert variant="notice" dense title="This is a dense alert"></Alert>
)

Dense.parameters = {
  controls: { disable: true }
}

export const onClose = () => {

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
    <div>
      <Button color="primary" onClick={() => openAlert('close')}>Open alert</Button>
      <Alert title="Alert with onClose function" show={alerts['close']} onClose={() => closeAlert('close')} />
    </div>
  )
}

onClose.parameters = {
  controls: { disable: true }
}
