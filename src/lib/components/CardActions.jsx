import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const CardActions = ({ className, children, ...props }) => {

  return (
    <div
      className={classnames([
        'card__actions',
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

CardActions.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
