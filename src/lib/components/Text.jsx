import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import {
  AlignFull,
  ColorsText,
  TextVariant,
  TextWeight
} from '../types'

export const Text = ({
  variant,
  align,
  weight,
  transform,
  underline,
  italic,
  code,
  color,
  gutter,
  component,
  className,
  children,
  ...props
}) => {

  const Component = component

  return (
    <Component
      className={classnames([
        'text',
        {
          [`${variant}`]: variant,
          [`text--${align}`]: align,
          [`text--${weight}`]: weight,
          [`text--${transform}`]: transform,
          [`text--${color}`]: color,
          'text--gutter': gutter,
          'text--underline': underline,
          'text--italic': italic,
          'text--code': code
        },
        className
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}

Text.propTypes = {
  variant: PropTypes.oneOf(TextVariant),
  align: PropTypes.oneOf(AlignFull),
  weight: PropTypes.oneOf(TextWeight),
  transform: PropTypes.oneOf([
    'none',
    'capitalize',
    'uppercase',
    'lowercase',
    'initial',
    'inherit'
  ]),
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  code: PropTypes.bool,
  color: PropTypes.oneOf(ColorsText),
  gutter: PropTypes.bool,
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'label',
    'legend'
  ]),
  className: PropTypes.node,
  children: PropTypes.any
}

Text.defaultProps = {
  underline: false,
  italic: false,
  gutter: false,
  component: 'p'
}
