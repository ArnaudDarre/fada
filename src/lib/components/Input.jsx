import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Input = ({
  onChange,
  type,
  id,
  placeholder,
  label,
  notice,
  icon,
  error,
  disabled,
  required,
  onFocus,
  onBlur,
  className,
  ...props
}) => {

  const [isFocused, setFocused] = useState(false)

  return (
    <div
      className={classnames([
        'input',
        {
          'input--focused': isFocused,
          'js--error': error,
          'input--disabled': disabled,
          'input--required': required
        },
        className
      ])}
      onChange={onChange}
      onFocus={(event) => {
        setFocused(true)
        onFocus && onFocus(event)
      }}
      onBlur={(event) => {
        setFocused(false)
        onBlur && onBlur(event)
      }}
    >
      {label ? (
        <Text
          className={classnames('input__label')}
          component='label'
          htmlFor={id}
        >
          {label}
        </Text>
      ) : null}
      {icon ? (
        <div className={classnames('input__icon')}>{icon}</div>
      ) : null }
      <input
        type={type}
        className={classnames('input__control')}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {notice ? (
        <Text
          className={classnames('input__notice')}
          variant="caption"
          weight="regular"
        >
          {notice}
        </Text>
      ) : null}
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'date',
    'time'
  ]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  icon: PropTypes.node,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.node
}

Input.defaultProps = {
  type: 'text',
  label: 'Input'
}
