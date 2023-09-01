import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Layer } from './Layer'
import { Colors, SizeFull } from '../types'

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
  isTransparent,
  className,
  children,
  ...props
}) => {

  const Component = component

  let content

  if (kind === 'text') {
    content = (
      <>
        {iconLeft ? (
          <span className={classnames(
            'button__icons',
            'button__icons--left'
          )}>
            {iconLeft}
          </span>
        ) : null}
        {children}
        {iconRight ? (
          <span className={classnames(
            'button__icons',
            'button__icons--right'
          )}>
            {iconRight}
          </span>
        ) : null}
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
    <Layer
      className={classnames([
        'button__wrapper',
        {
          [`button--${size}`]: size,
          [`button--${kind}`]: kind,
          [`button--${variant}`]: variant,
          'button--fullWidth': fullWidth,
          'button--disabled': disabled,
          'button--transparent': isTransparent
        },
        className
      ])}
      fill={variant === 'fill' ? color : null}
      stroke={variant === 'stroke' ? color : null}
      hasHover
      disabled={disabled}
    >
      <Component
        className={classnames([
          'button',
          {
            [`text--${color}`]: isTransparent
          }
        ])}
        disabled={disabled}
        {...props}
      >
        {content}
      </Component>
    </Layer>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(Colors),
  size: PropTypes.oneOf(SizeFull),
  kind: PropTypes.oneOf([
    'text',
    'icon'
  ]),
  variant: PropTypes.oneOf([
    'fill',
    'stroke'
  ]),
  component: PropTypes.oneOf([
    'button',
    'a'
  ]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  isTransparent: PropTypes.bool,
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
