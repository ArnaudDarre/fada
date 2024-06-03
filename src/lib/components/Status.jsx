import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Status = ({
  color,
  dense,
  className,
  children,
  ...props
}) => {

  return (
    <Text
      className={classnames([
        'status',
        {
          [`status--${color}`]: color,
          'status--dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </Text>
  )
}

Status.propTypes = {
  color: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'error',
    'inactive'
  ]),
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.string
}

Status.defaultProps = {
  color: 'inactive',
  children: 'Status p'
}
