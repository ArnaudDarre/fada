import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Link = ({
  color,
  disabled,
  className,
  children,
  ...props
}) => {

  return (
    <Text
      className={classnames([
        'link',
        {
          'link--disabled': disabled
        },
        className
      ])}
      color={color}
      weight='bold'
      component='a'
      {...props}
    >
      {children}
    </Text>
  )
}

Link.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'highlight',
    'success',
    'info',
    'warning',
    'error'
  ]),
  disabled: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.string
}

Link.defaultProps = {
  disabled: false,
  children: 'Link'
}
