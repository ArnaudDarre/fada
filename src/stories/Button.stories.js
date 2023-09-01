import { Coffee, Moon, Sun } from 'react-feather'

import { Button } from '../lib/components/Button';
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import { Colors, SizeFull } from '../lib/types'

export default {
  title: 'Components/Interactions/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Component for every call-to-action.'
      }
    }
  },
  argTypes: {
    color: {
      defaultValue: 'primary',
      options: Colors,
      table: { type: { summary: Colors } }
    },
    size: {
      defaultValue: 'md',
      options: SizeFull,
      table: { type: { summary: SizeFull } }
    },
    kind: { defaultValue: 'text' },
    variant: { defaultValue: 'fill' },
    component: { defaultValue: 'button' },
    fullWidth: { defaultValue: false },
    disabled: { defaultValue: false },
    iconLeft: { control: { type: null } },
    iconRight: { control: { type: null } },
    isTransparent: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Button {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Button'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">color</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" isDefault dense /></Grid>
                  <Grid item><Button color="primary">Primary</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item><Button color="secondary">Secondary</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='highlight'" dense /></Grid>
                  <Grid item><Button color="highlight">highlight</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='grey-50'" dense /></Grid>
                  <Grid item><Button color="grey-50">Grey</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='success'" dense /></Grid>
                  <Grid item><Button color="success">Success</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='info'" dense /></Grid>
                  <Grid item><Button color="info">Info</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='warning'" dense /></Grid>
                  <Grid item><Button color="warning">Warning</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='error'" dense /></Grid>
                  <Grid item><Button color="error">Error</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">size</Text>}
              subtitle="Use the size property to display smaller or larger buttons."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="size='xs'" dense /></Grid>
                  <Grid item><Button size="xs">XSmall</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="size='sm'" dense /></Grid>
                  <Grid item><Button size="sm">Small</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="size='md'" isDefault dense /></Grid>
                  <Grid item><Button size="md">Medium</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="size='lg'" dense /></Grid>
                  <Grid item><Button size="lg">Large</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="size='xl'" dense /></Grid>
                  <Grid item><Button size="xl">XLarge</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">kind</Text>}
              subtitle="These are the different kind of buttons."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='text'" isDefault dense /></Grid>
                  <Grid item><Button kind="text">Text</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="kind='icon'" dense /></Grid>
                  <Grid item><Button kind="icon"><Coffee /></Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">variant</Text>}
              subtitle="These are the different styles of a button element."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='fill'" isDefault dense /></Grid>
                  <Grid item><Button variant="fill">Fill</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='stroke'" dense /></Grid>
                  <Grid item><Button variant="stroke">Stroke</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">fullWidth</Text>}
              subtitle="Expand the button to take the full width of the container."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="fullWidth" dense /></Grid>
                  <Grid item><Button fullWidth>Full width</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">disabled</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="disabled" dense /></Grid>
                  <Grid item><Button disabled>Disabled</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">icons</Text>}
              subtitle="You can add icons on the left or right side of a text button by using the iconLeft and iconRight props."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="iconLeft={<Sun />}" dense /></Grid>
                  <Grid item><Button iconLeft={<Sun />}>Icon left</Button></Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="iconRight={<Moon />}" dense /></Grid>
                  <Grid item><Button iconRight={<Moon />}>Icon right</Button></Grid>
                </Grid>
                <Grid item wrapper col={6} spacing={1} direction="column">
                  <Grid item><Snippet content="iconLeft={<Sun />} iconRight={<Moon />}" dense /></Grid>
                  <Grid item><Button iconLeft={<Sun />} iconRight={<Moon />}>Icon left and right</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">transparent</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="isTransparent" dense /></Grid>
                  <Grid item><Button isTransparent>Transparent</Button></Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
