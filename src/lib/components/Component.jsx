import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Component = ({
  prop1,
  prop2,
  className,
  children,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'component',
        {
          [`component--${prop1}`]: prop1,
          'component--prop2': prop2
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Component.propTypes = {
  prop1: PropTypes.oneOf([
    'option1',
    'option2'
  ]),
  prop2: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}

Component.defaultProps = {
}
