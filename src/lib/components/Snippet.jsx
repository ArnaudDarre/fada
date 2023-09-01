import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Text } from './Text'

export const Snippet = ({ content, isDefault, dense, isTransparent, className, ...props }) => {

  return (
    <div className={classnames('snippet__wrapper')} >
      <SyntaxHighlighter
        language="javascript"
        style={nnfxDark}
        className={classnames([
          'snippet',
          { ' snippet--transparent': isTransparent },
          { ' snippet--dense': dense },
          className
        ])}
        {...props}
      >
        {content}
      </SyntaxHighlighter>
      {isDefault ? (<Text variant="overline" weight="bold" className={classnames('snippet__default')}>Default</Text>) : null}
    </div>
  )
}

Snippet.propTypes = {
  content: PropTypes.string,
  isDefault: PropTypes.bool,
  dense: PropTypes.bool,
  isTransparent: PropTypes.bool,
  className: PropTypes.node
}

Snippet.defaultProps = {
  isDefault: false,
  dense: false,
  isTransparent: false
}
