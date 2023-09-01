import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Layer } from './Layer'
import { Text } from './Text'

export const Tag = ({
  color,
  dense,
  className,
  children,
  ...props
}) => {

  return (
    <Layer
      className={classnames([
        'tag',
        {
          'tag--dense': dense
        },
        className
      ])}
      fill={color}
    >
      <Text
        className={classnames('tag__text')}
        variant={dense === true ? 'overline' : 'caption'}
        weight='regular'
        {...props}
      >
        {children}
      </Text>
    </Layer>
  )
}

Tag.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'highlight',
    'success',
    'info',
    'warning',
    'error'
  ]),
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.string
}

Tag.defaultProps = {
  color: 'primary',
  dense: false,
  children: 'Tag'
}
