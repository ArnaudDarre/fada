import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CalendarBlank, CaretUpDown, Clock } from '@phosphor-icons/react'

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

  let customIcon

  if (type === 'date') {
    customIcon = <CalendarBlank />
  } else if (type === 'time') {
    customIcon = <Clock />
  } else if (type === 'number') {
    customIcon = <CaretUpDown />
  } else {
    customIcon = icon
  }

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
      {label && <label className={'input__label'} htmlFor={id}>{label}</label>}
      {notice && <p className={'input__notice'}>{notice}</p>}
      {customIcon && <div className={'input__icon'}>{customIcon}</div>}
      <input
        type={type}
        className={'input__control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
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
