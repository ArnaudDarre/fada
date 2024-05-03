/** @type { import('@storybook/react').Preview } */
import theme from './theme'
import './style.scss'
import '../src/lib/styles/index.scss'

const preview = {
  parameters: {
    actions: { disable: true },
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
          'Introduction',
          'Customise',
          'Utilities',
          'Components',
        ],
      }
    }
  },
};

export default preview;
