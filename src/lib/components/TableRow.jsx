import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const TableRow = ({ className, children, ...props }) => {
  return (
    <tr
      className={classnames([
        'table__row',
        className
      ])}
      {...props}
    >
      {children}
    </tr>
  )
}

TableRow.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
