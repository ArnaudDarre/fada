/** @type { import('@storybook/react').Preview } */
import theme from './theme'
import './style.scss'
import '../src/lib/styles/index.scss'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: theme
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Intro',
          'Design system',
          'Components', [
            'Utils',
            'Mixins',
            'Layout',
            'Navigation',
            'Data',
            'Form',
            'Interactions'
          ]
        ],
      }
    }
  },
};

export default preview;
