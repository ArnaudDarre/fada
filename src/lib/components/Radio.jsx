import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Radio = ({
  id,
  name,
  value,
  label,
  disabled,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'radio',
        { 'radio--disabled': disabled },
        className
      ])}
    >
      <input
        className={classnames('radio__control')}
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
      <Text
        className={classnames('radio__label')}
        variant="body"
        component="label"
        htmlFor={id}
      >
        {label}
      </Text>
    </div>
  )
}

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.node
}
