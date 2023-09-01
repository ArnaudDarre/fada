import React, { useContext, useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ChevronDown } from 'react-feather'
import { Link } from 'react-router-dom'

import { NavGroup, SizeContext } from './NavGroup'

export const NavItem = ({
  label,
  size,
  active,
  disabled,
  dropdown,
  icon,
  end,
  to,
  className,
  ...props
}) => {

  const useSize = () => useContext(SizeContext)
  const sizeParent = useSize()
  const sizeProp = sizeParent ? sizeParent : size

  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  let Component

  if (dropdown || disabled) {
    Component = 'p'
  } else {
    Component = Link
  }

  return (
    <div
      className={classnames([
        'navItem',
        {
          [`navItem--${sizeProp}`]: sizeProp,
          'navItem--active': active,
          'navItem--disabled': disabled
        },
        className
      ])}
      {...props}
    >
      <Component
        end={end}
        to={to}
        className={classnames([
          'navItem__trigger'
        ])}
        onClick={onClick}
      >
        {icon ? (<span className={classnames('navItem__icon')}>{icon}</span>) : null}
        <span>{label}</span>
        {dropdown ? (<span className={classnames('navItem__icon')}><ChevronDown /></span>) : null}
      </Component>
      {dropdown ? (
        <NavGroup
          ref={dropdownRef}
          className={classnames([
            'navItem__dropdown',
            'zi-1',
            {
              'navItem__dropdown--active': isActive
            }
          ])}
        >
          {dropdown}
        </NavGroup>
      ) : null }
    </div>
  )
}

NavItem.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  dropdown: PropTypes.object,
  icon: PropTypes.node,
  end: PropTypes.node,
  to: PropTypes.node,
  className: PropTypes.node
}

NavItem.defaultProps = {
  label: 'Nav item',
  size: 'md'
}
