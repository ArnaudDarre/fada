import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { CardActions } from './CardActions'

export const ModalActions = ({ className, children, ...props }) => {
  return (
    <CardActions
      className={classnames([
        'modal__actions',
        className
      ])}
      {...props}
    >
      {children}
    </CardActions>
  )
}

ModalActions.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
