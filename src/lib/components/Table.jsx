import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { TableFooter } from './TableFooter'

export const DenseContext = createContext(false)

export const Table = ({ dense, noBorder, withFooter, className, children, ...props }) => {
  return (
    <DenseContext.Provider value={dense}>
      <div
        className={classnames([
          'table',
          {
            'table--noBorder': noBorder
          },
          className
        ])}
      >
        <table
          cellPadding={0}
          cellSpacing={0}
          className={classnames('table__content')}
          {...props}
        >
          {children}
        </table>
        {withFooter ? <TableFooter dense={dense ? dense : null} /> : null}
      </div>
    </DenseContext.Provider>
  )
}

Table.propTypes = {
  dense: PropTypes.bool,
  noBorder: PropTypes.bool,
  withFooter: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}

Table.defaultProps = {
  dense: false
}
