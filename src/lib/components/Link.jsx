import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Link = ({
  icon,
  color,
  className,
  children,
  ...props
}) => {

  return (
    <Text
      className={classnames([
        'link',
        className
      ])}
      color={color}
      component='a'
      {...props}
    >
      {children}
      {icon && <span className={'link__icon'}>{icon}</span>}
    </Text>
  )
}

Link.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.oneOf([
    'default',
    'alt',
    'disabled',
    'contrast',
    'contrastAlt',
    'contrastDisabled',
    'primary',
    'secondary',
    'highlight',
    'success',
    'info',
    'warning',
    'error'
  ]),
  className: PropTypes.node,
  children: PropTypes.string
}

Link.defaultProps = {
  children: 'Link'
}
