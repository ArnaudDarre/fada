import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const RadioButtons = ({
  onChange,
  id,
  label,
  notice,
  error,
  disabled,
  required,
  direction,
  onFocus,
  onBlur,
  children,
  className
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
      <div
        className={classnames([
          'input__control',
          'radios',
          {
            [`radios--${direction}`]: direction
          }
        ])}
      >
        {children}
      </div>
    </div>
  )
}

RadioButtons.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.node
}

RadioButtons.defaultProps = {
  label: 'Label',
  direction: 'landscape'
}
