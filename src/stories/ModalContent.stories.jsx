import React from 'react'

import { ModalContent } from '../lib/components/ModalContent'
import { Paragraph } from '../lib/components/Paragraph'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Interactions/ModalContent',
  component: ModalContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for the modal content. It is based on the ModalContent component and accepts the same props.'
      }
    }
  },
  argTypes: {
    fullWidth: { defaultValue: false },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <ModalContent {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Paragraph>
        <Text>Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).</Text>
        <Text>They can appear either below ground (hypogeous) or above ground (epigeous) where they may be picked by hand. Edibility may be defined by criteria that include absence of poisonous effects on humans and desirable taste and aroma. Edible mushrooms are consumed for their nutritional and culinary value. Mushrooms, especially dried shiitake, are sources of umami flavor.</Text>
      </Paragraph>
    </>
  )
}
