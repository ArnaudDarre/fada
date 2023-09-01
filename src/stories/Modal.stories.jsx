import React, { useState } from 'react'

import { Button } from '../lib/components/Button'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Modal } from '../lib/components/Modal'
import { ModalActions } from '../lib/components/ModalActions'
import { ModalContent } from '../lib/components/ModalContent'
import { ModalHeader } from '../lib/components/ModalHeader'
import { Paragraph } from '../lib/components/Paragraph'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Interactions/Modal',
  component: Modal,
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

// const [show, setShow] = useState(false)
// const openModal = () => setShow(true)
// const closeModal = () => setShow(false)

const Template = (args) => (
  <>
    <Button color="grey-60">Open</Button>
    <Modal {...args} />
    {/* <Button color="grey-60" onClick={openModal}>Open</Button>
    <Modal show={show} onClose={closeModal} {...args} /> */}
  </>
)

export const Playground = Template.bind({})

Playground.args = {
  children: 'Modal'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {

    const [modals, setModals] = useState({})

    const openModal = (modalId) => {
      setModals((prevModals) => ({
        ...prevModals,
        [modalId]: true
      }))
    }

    const closeModal = (modalId) => {
      setModals((prevModals) => ({
        ...prevModals,
        [modalId]: false
      }))
    }

    const modalContentExampple = (
      <>
        <ModalHeader
          title="Eat mushroom"
        />
        <ModalContent>
          <Paragraph>
            <Text>Mushrooms may be cooked before consumption.</Text>
            <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
          </Paragraph>
        </ModalContent>
        <ModalActions>
          <Button fullWidth type="submit">Submit</Button>
        </ModalActions>
      </>
    )

    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">transition</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="transition='slide'" isDefault dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('slide')}>Open</Button>
                    <Modal transition="slide" show={modals['slide']} onClose={() => closeModal('slide')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="transition='zoom'" dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('zoom')}>Open</Button>
                    <Modal transition="zoom" show={modals['zoom']} onClose={() => closeModal('zoom')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="transition='fade'" dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('fade')}>Open</Button>
                    <Modal transition="fade" show={modals['fade']} onClose={() => closeModal('fade')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">width</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="width='laptop'" dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('laptop')}>Open</Button>
                    <Modal width="laptop" show={modals['laptop']} onClose={() => closeModal('laptop')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="width='tablet'" dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('tablet')}>Open</Button>
                    <Modal width="tablet" show={modals['tablet']} onClose={() => closeModal('tablet')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="width='mobile'" dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('mobile')}>Open</Button>
                    <Modal width="mobile" show={modals['mobile']} onClose={() => closeModal('mobile')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="width='mobile-sm'" isDefault dense /></Grid>
                  <Grid item>
                    <Button color="grey-60" onClick={() => openModal('mobile-sm')}>Open</Button>
                    <Modal width="mobile-sm" show={modals['mobile-sm']} onClose={() => closeModal('mobile-sm')}>
                      {modalContentExampple}
                    </Modal>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">disableBlackdropClick</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="disableBlackdropClick" dense /></Grid>
                <Grid item>
                  <Button color="grey-60" onClick={() => openModal('disabled-backdrop')}>Open</Button>
                  <Modal disableBlackdropClick show={modals['disabled-backdrop']} onClose={() => closeModal('disabled-backdrop')}>
                    {modalContentExampple}
                  </Modal>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
