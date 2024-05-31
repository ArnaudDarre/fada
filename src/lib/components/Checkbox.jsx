import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Checkbox = ({
  id,
  value,
  label,
  checked,
  disabled,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'checkbox',
        { 'checkbox--disabled': disabled },
        className
      ])}
    >
      <input
        className={classnames('checkbox__control')}
        type="checkbox"
        name={id}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <Text
        className={classnames('checkbox__label')}
        variant="body"
        component="label"
        htmlFor={id}
      >
        {label}
      </Text>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.node
}
