import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import {
  AlignFull,
  ColorsText,
  TextVariant,
  TextWeight
} from '../types'

export const Paragraph = ({
  variant,
  align,
  weight,
  underline,
  italic,
  color,
  className,
  children,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'paragraph',
        {
          [`${variant}`]: variant,
          [`text--${align}`]: align,
          [`text--${weight}`]: weight,
          [`text--${color}`]: color,
          'text--underline': underline,
          'text--italic': italic
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Paragraph.propTypes = {
  variant: PropTypes.oneOf(TextVariant),
  align: PropTypes.oneOf(AlignFull),
  weight: PropTypes.oneOf(TextWeight),
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.oneOf(ColorsText),
  className: PropTypes.node,
  children: PropTypes.any
}

Paragraph.defaultProps = {
  variant: 'body',
  underline: false,
  italic: false
}
