import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { CardContent } from './CardContent'

export const ModalContent = ({ className, children, ...props }) => {
  return (
    <CardContent
      className={classnames([
        'modal__content',
        className
      ])}
      {...props}
    >
      {children}
    </CardContent>
  )
}

ModalContent.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
