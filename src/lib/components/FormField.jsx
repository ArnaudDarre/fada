import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const FormField = ({
  onChange,
  kind,
  id,
  placeholder,
  label,
  notice,
  icon,
  direction,
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

  const multiChild = kind === 'radio' || kind === 'checkbox'

  let fieldElement

  if (kind === 'select') {
    fieldElement = (
      <>
        <select
          className={classnames('input__control')}
          name={id}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        >
          {children}
        </select>
      </>
    )
  } else if (multiChild) {
    fieldElement = (
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
    )
  } else if (kind === 'text') {
    fieldElement = (
      <input
        className={classnames('input__control')}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
    )
  } else if (kind === 'textarea') {
    fieldElement = (
      <textarea
        className={classnames('input__control')}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      >
      </textarea>
    )
  }

  return (
    <div
      className={classnames([
        'input',
        {
          'input--focused': isFocused,
          [`${kind}`]: kind,
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
          component={multiChild ? 'legend' : 'label'}
          htmlFor={id}
        >
          {label}
        </Text>
      ) : null}
      <div
        className={classnames([
          'input__field',
          {
            [`input--${kind}`]: kind,
            [`input--${direction}`]: direction
          }
        ])}>
        {icon ? (
          <div className={classnames('input__icon')}>{icon}</div>
        ) : null }
        {fieldElement}
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

FormField.propTypes = {
  onChange: PropTypes.func,
  kind: PropTypes.oneOf([
    'text',
    'select',
    'textarea',
    'radio',
    'checkbox'
  ]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  icon: PropTypes.node,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.node
}

FormField.defaultProps = {
  kind: 'text',
  direction: 'landscape'
}
