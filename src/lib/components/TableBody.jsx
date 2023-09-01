import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const TableBody = ({ className, children, ...props }) => {
  return (
    <tbody
      className={classnames([
        'table__body',
        className
      ])}
      {...props}
    >
      {children}
    </tbody>
  )
}

TableBody.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
