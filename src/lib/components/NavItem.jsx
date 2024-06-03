import React, { useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { NavGroup } from './NavGroup'

export const NavItem = ({
  label,
  active,
  disabled,
  dropdown,
  icon,
  end,
  to,
  className,
  ...props
}) => {

  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  let Component

  if (dropdown || disabled) {
    Component = 'button'
  } else {
    Component = Link
  }

  return (
    <li
      className={classnames([
        'nav__item',
        {
          'nav__item--dropdown': dropdown,
          'js-show': isActive,
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
        className={'nav__trigger'}
        onClick={onClick}
      >
        {icon ? (<span className={classnames('navItem__icon')}>{icon}</span>) : null}
        <span>{label}</span>
      </Component>
      {dropdown ? (
        <NavGroup
          ref={dropdownRef}
          className={classnames([
            'nav__target',
            'zi-1'
          ])}
        >
          {dropdown}
        </NavGroup>
      ) : null }
    </li>
  )
}

NavItem.propTypes = {
  label: PropTypes.string,
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
  dense: 'md'
}
