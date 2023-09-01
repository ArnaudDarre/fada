import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const SelectOption = ({ value, group, className, children, ...props }) => {

  let Component

  if (group === true) {
    Component = 'optgroup'
  } else {
    Component = 'option'
  }

  return (
    <Component
      className={classnames([
        'select__option',
        className
      ])}
      value={value}
      {...props}
    >
      {children}
    </Component>
  )
}

SelectOption.propTypes = {
  value: PropTypes.string,
  group: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}
