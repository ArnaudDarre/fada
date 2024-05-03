import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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
  spacing: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
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
