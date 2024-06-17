import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

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
      {label ? (
        <Text
          className={classnames('input__label')}
          component='label'
          htmlFor={id}
        >
          {label}
        </Text>
      ) : null}
      <select
        className={classnames('input__control')}
        name={id}
        id={id}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
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
