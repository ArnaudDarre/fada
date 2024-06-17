import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

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
      {label ? (
        <Text
          className={classnames('input__label')}
          component='label'
          htmlFor={id}
        >
          {label}
        </Text>
      ) : null}
      <textarea
        className={classnames('input__control')}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        rows={4}
        {...props}
      ></textarea>
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
