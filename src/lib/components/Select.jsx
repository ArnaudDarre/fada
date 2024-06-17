import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Select = ({
  onChange,
  id,
  label,
  notice,
  error,
  disabled,
  required,
  onFocus,
  onBlur,
  children,
  className,
  ...props
}) => {

  const [isFocused, setFocused] = useState(false)

  return (
    <div
      className={classnames([
        'input',
        'select',
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
      <select
        className={'input__control'}
        name={id}
        id={id}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.node
}

Select.defaultProps = {
  label: 'Text input'
}
