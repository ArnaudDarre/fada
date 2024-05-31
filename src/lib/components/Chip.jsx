import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { X } from '@phosphor-icons/react'

import { Layer } from './Layer'

export const Chip = ({
  color,
  dense,
  avatar,
  disabled,
  onClose,
  className,
  children,
  ...props
}) => {

  return (
    <Layer
      className={classnames([
        'chip',
        {
          'chip--dense': dense,
          'chip--disabled': disabled
        },
        className
      ])}
      fill={color}
      {...props}
    >
      {avatar ? <img className={classnames('chip__avatar')} src={avatar} /> : null}
      <div className={classnames('chip__content')}>
        {children}
      </div>
      {onClose ? <X className={classnames('chip__close')} size={dense ? 16 : 24} /> : null}
    </Layer>
  )
}

Chip.propTypes = {
  color: PropTypes.oneOf([
    'paper',
    'primary',
    'secondary',
    'highlight',
    'success',
    'info',
    'warning',
    'error'
  ]),
  dense: PropTypes.bool,
  avatar: PropTypes.node,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.node,
  children: PropTypes.any
}

Chip.defaultProps = {
  color: 'paper',
  onClose: null
}
