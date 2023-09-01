import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Size } from '../types'

export const Buttons = ({ direction, spacing, className, children, ...props }) => {
  return (
    <div
      className={classnames([
        'buttons',
        {
          [`buttons--${direction}`]: direction,
          [`buttons--${spacing}`]: spacing
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Buttons.propTypes = {
  direction: PropTypes.oneOf([
    'landscape',
    'portrait'
  ]),
  spacing: PropTypes.oneOf(Size),
  className: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

Buttons.defaultProps = {
  direction: 'landscape',
  spacing: 'md'
}
