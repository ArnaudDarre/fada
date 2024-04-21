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
          'Styles',
          'Utilities',
          'Components',
        ],
      }
    }
  },
};

export default preview;
