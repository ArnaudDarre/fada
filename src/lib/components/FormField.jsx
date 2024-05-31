import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CaretDown } from '@phosphor-icons/react'

import { Text } from './Text'

export const FormField = ({
  onChange,
  kind,
  id,
  placeholder,
  label,
  notice,
  customIcon,
  direction,
  disabled,
  error,
  dense,
  onFocus,
  onBlur,
  children,
  className,
  ...props
}) => {

  const [isFocused, setFocused] = useState(false)

  const multiChild = kind === 'radio' || kind === 'checkbox' || kind === 'switch'

  let fieldElement

  if (kind === 'select') {
    fieldElement = (
      <>
        <select
          className={classnames('field__fieldInput')}
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
      <>
        {children}
      </>
    )
  } else if (kind === 'text') {
    fieldElement = (
      <input
        className={classnames('field__fieldInput')}
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
        className={classnames('field__fieldInput')}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      >
      </textarea>
    )
  }

  let icon

  if (kind === 'select') {
    icon = <CaretDown />
  } else {
    icon = customIcon
  }

  return (
    <fieldset
      className={classnames([
        'field',
        {
          'field--active': isFocused,
          'field--disabled': disabled,
          'field--error': error
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
          className={classnames('field__label')}
          variant={dense ? 'overline' : 'caption'}
          weight='bold'
          component={multiChild ? 'legend' : 'label'}
          htmlFor={id}
        >
          {label}
        </Text>
      ) : null}
      <div
        className={classnames([
          'field__field',
          {
            [`field--${kind}`]: kind,
            [`field--${direction}`]: direction,
            'field--dense': dense
          }
        ])}>
        {icon ? (
          <div className={classnames('field__icon')}>{icon}</div>
        ) : null }
        {fieldElement}
      </div>
      {notice ? (
        <Text
          className={classnames('field__notice')}
          variant="caption"
          weight="regular"
        >
          {notice}
        </Text>
      ) : null}
    </fieldset>
  )
}

FormField.propTypes = {
  onChange: PropTypes.func,
  kind: PropTypes.oneOf([
    'text',
    'select',
    'textarea',
    'radio',
    'checkbox',
    'switch'
  ]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  notice: PropTypes.string,
  customIcon: PropTypes.node,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  dense: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.node
}

FormField.defaultProps = {
  kind: 'text',
  direction: 'landscape'
}
