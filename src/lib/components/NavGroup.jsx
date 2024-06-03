import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const NavGroup = ({
  className,
  children,
  ...props
}) => {

  return (
    <ul
      className={classnames([
        'nav__group',
        className
      ])}
      {...props}
    >
      {children}
    </ul>
  )
}

NavGroup.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
