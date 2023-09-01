import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Check, Minus } from 'react-feather'

import { Text } from './Text'

export const Checkbox = ({
  id,
  value,
  label,
  checked,
  partial,
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
        className={classnames('checkbox__input')}
        type="checkbox"
        name={id}
        id={id}
        value={value}
        defaultChecked={checked}
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
      {partial ? (
        <Minus className={classnames('checkbox__icon')} />
      ) : (
        <Check className={classnames('checkbox__icon')} />
      )}
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  partial: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.node
}

Checkbox.defaultProps = {
  checked: false,
  partial: false,
  disabled: false
}
