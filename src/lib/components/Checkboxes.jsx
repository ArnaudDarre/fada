import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Checkboxes = ({
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
      {label ? (
        <Text
          className={classnames('input__label')}
          component='label'
          htmlFor={id}
        >
          {label}
        </Text>
      ) : null}
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

Checkboxes.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  icon: PropTypes.node,
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

Checkboxes.defaultProps = {
  label: 'Label',
  direction: 'landscape'
}
