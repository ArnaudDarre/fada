import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Textarea = ({
  onChange,
  id,
  placeholder,
  label,
  notice,
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
      {label && <label className={'input__label'} htmlFor={id}>{label}</label>}
      {notice && <p className={'input__notice'}>{notice}</p>}
      <textarea
        className={'input__control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        rows={4}
        {...props}
      ></textarea>
    </div>
  )
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.node
}

Textarea.defaultProps = {
  label: 'Text input'
}
