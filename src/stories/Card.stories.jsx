import React from 'react'
import classnames from 'classnames'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { Card } from '../lib/components/Card'
import { CardActions } from '../lib/components/CardActions'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { CardMedia } from '../lib/components/CardMedia'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Layout/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Wrapper for all card elements, one of the most common component in a UI.'
      }
    }
  },
  argTypes: {
    direction: { defaultValue: 'portrait' },
    noPadding: { defaultValue: false },
    hasShadow: { defaultValue: true },
    transparent: { defaultValue: false },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Card {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <CardMedia
        height={300}
        image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg'
      />
      <CardHeader
        title="Mushrooms"
        subtitle="Edible mushrooms"
      />
      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
      <CardActions>
        <Button color="grey-60">Back</Button>
        <Buttons>
          <Button color="error">Cancel</Button>
          <Button color="primary">Save</Button>
        </Buttons>
      </CardActions>
    </>
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
              title={<Text code component="span">size</Text>}
              subtitle="Changes the size of the component. This changes the padding around the children, the border radius, and the title and subtitle text variants. Try and adapt the variant used for Text components in CardContent to match the overall size of the card."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="size='xs'" dense /></Grid>
                  <Grid item>
                    <Card size="xs">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={80} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent><Text variant="overline">Edible mushrooms include many fungal species that are either harvested wild or cultivated.</Text></CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='sm'" dense /></Grid>
                  <Grid item>
                    <Card size="sm">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent><Text variant="caption" weight="regular">Edible mushrooms include many fungal species that are either harvested wild or cultivated.</Text></CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={5} spacing={1} direction="column">
                  <Grid item><Snippet content="size='md'" isDefault dense /></Grid>
                  <Grid item>
                    <Card size="md">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={120} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={5} spacing={1} direction="column">
                  <Grid item><Snippet content="size='lg'" dense /></Grid>
                  <Grid item>
                    <Card size="lg">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={140} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="md">Cancel</Button>
                        <Button color="success" size="md">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={7} spacing={1} direction="column">
                  <Grid item><Snippet content="size='xl'" dense /></Grid>
                  <Grid item>
                    <Card size="xl">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={160} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="md">Cancel</Button>
                        <Button color="success" size="md">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">fill</Text>}
              subtitle="Changes the card background, and it some cases the text color. All background, brand and feedback colours are avaible (see Layer component for details)."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="fill='paper'" isDefault dense /></Grid>
                  <Grid item>
                    <Card fill="paper">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="fill='white'" dense /></Grid>
                  <Grid item>
                    <Card fill="white">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="fill='primary'" dense /></Grid>
                  <Grid item>
                    <Card fill="primary">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">direction</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='portrait'" isDefault dense /></Grid>
                  <Grid item>
                    <Card direction="portrait">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item wrapper col={8} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='landscape'" dense /></Grid>
                  <Grid item>
                    <Card direction="landscape">
                      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" width={100} />
                      <CardHeader
                        title="Mushrooms"
                        subtitle="Edible mushrooms"
                      />
                      <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                      <CardActions>
                        <Button color="error" size="xs">Cancel</Button>
                        <Button color="success" size="xs">Save</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">noPadding</Text>}
              subtitle="Remove padding around the card (not between card children). Also removes the background colour."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="noPadding" /></Grid>
                <Grid item>
                  <Card noPadding>
                    <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                    <CardHeader
                      title="Mushrooms"
                      subtitle="Edible mushrooms"
                    />
                    <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                    <CardActions>
                      <Button color="error" size="xs">Cancel</Button>
                      <Button color="success" size="xs">Save</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent className={classnames('of-visible')}>
            <CardHeader
              title={<Text code component="span">shadow</Text>}
              subtitle="Add a box-shadow property to the card"
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="hasShadow" /></Grid>
                <Grid item>
                  <Card hasShadow>
                    <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                    <CardHeader
                      title="Mushrooms"
                      subtitle="Edible mushrooms"
                    />
                    <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                    <CardActions>
                      <Button color="error" size="xs">Cancel</Button>
                      <Button color="success" size="xs">Save</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">transparent</Text>}
              subtitle="Remove the background colour while keeping the padding around the card."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="transparent" /></Grid>
                <Grid item>
                  <Card transparent>
                    <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height={100} />
                    <CardHeader
                      title="Mushrooms"
                      subtitle="Edible mushrooms"
                    />
                    <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
                    <CardActions>
                      <Button color="error" size="xs">Cancel</Button>
                      <Button color="success" size="xs">Save</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      // <Card>
      //   <CardHeader
      //     title="Nested cards"
      //     subtitle="You can nest cards. To do that, simply use a Card component as the children of a CardContent component. You can combine it with the Grid component to create a grid of cards (like you would do for the parent)."
      //   />
      //   <CardContent>
      //     <Grid wrapper spacing={2} direction="column">
      //       <Grid item>
      //         <Card fill="background" size="xs">
      //           <CardHeader
      //             title="Children"
      //           />
      //         </Card>
      //       </Grid>
      //       <Grid item>
      //         <Card fill="background" size="xs">
      //           <CardHeader
      //             title="Children"
      //           />
      //         </Card>
      //       </Grid>
      //       <Grid item>
      //         <Card fill="background" size="xs">
      //           <CardHeader
      //             title="Children"
      //           />
      //         </Card>
      //       </Grid>
      //     </Grid>
      //   </CardContent>
      // </Card>
    )
  }
]
