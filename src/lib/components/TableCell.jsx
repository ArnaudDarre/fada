import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { DenseContext } from './Table'
import { TableCellComponentContext } from './TableHead'

export const TableCell = ({ align, className, children, ...props }) => {

  const useDense = () => useContext(DenseContext)
  const dense = useDense()
  const useTableCellComponent = () => useContext(TableCellComponentContext)
  const Component = useTableCellComponent()

  return (
    <Component
      className={classnames([
        'table__cell',
        {
          [`table__cell--${align}`]: align,
          [`table__cell--${Component}`]: Component,
          'table__cell--dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}

TableCell.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  className: PropTypes.node,
  children: PropTypes.node
}
