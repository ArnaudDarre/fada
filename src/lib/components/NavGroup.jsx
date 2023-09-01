import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const SizeContext = createContext('md')

export const NavGroup = ({
  size,
  direction,
  transparent,
  className,
  children,
  ...props
}) => {

  return (
    <SizeContext.Provider value={size}>
      <div
        className={classnames([
          'navGroup',
          {
            [`navGroup--${size}`]: size,
            [`navGroup--${direction}`]: direction,
            'navGroup--transparent': transparent
          },
          className
        ])}
        {...props}
      >
        {children}
      </div>
    </SizeContext.Provider>
  )
}

NavGroup.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  direction: PropTypes.oneOf([
    'landscape',
    'portrait'
  ]),
  transparent: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}

NavGroup.defaultProps = {
  size: 'md',
  direction: 'portrait'
}
