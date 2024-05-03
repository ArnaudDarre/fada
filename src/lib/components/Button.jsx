import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Button = ({
  color,
  size,
  kind,
  variant,
  component,
  fullWidth,
  disabled,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}) => {

  const Component = component

  let content

  if (kind === 'text') {
    content = (
      <>
        {iconLeft ? iconLeft : null}
        {children}
        {iconRight ? iconRight : null}
      </>
    )
  } else if (kind === 'icon') {
    content = (
      <>
        {children}
      </>
    )
  }

  return (
    <Component
      className={classnames([
        'button',
        {
          [`button--${size}`]: size,
          [`button--${color}`]: color,
          [`button--${kind}`]: kind,
          [`button--${variant}`]: variant,
          'button--fullWidth': fullWidth,
          'button--disabled': disabled
        },
        className
      ])}
      disabled={disabled}
      {...props}
    >
      {content}
    </Component>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf([
    'black',
    'white',
    'grey',
    'primary',
    'secondary',
    'highlight',
    'success',
    'info',
    'warning',
    'error',
    'default',
    'contrast'
  ]),
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg'
  ]),
  kind: PropTypes.oneOf([
    'text',
    'icon'
  ]),
  variant: PropTypes.oneOf([
    'fill',
    'stroke',
    'transparent'
  ]),
  component: PropTypes.oneOf([
    'button',
    'a'
  ]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  className: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

Button.defaultProps = {
  color: 'primary',
  size: 'md',
  kind: 'text',
  variant: 'fill',
  component: 'button',
  fullWidth: false,
  disabled: false,
  isTransparent: false,
  children: 'Button'
}
