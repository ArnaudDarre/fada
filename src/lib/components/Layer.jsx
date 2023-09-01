import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Layer = ({
  fill,
  stroke,
  custom,
  fullWidth,
  hasHover,
  disabled,
  className,
  children,
  ...props
}) => {

  return (
    <div
      style={custom ? { backgroundColor: fill, border: '1px solid' + stroke } : null}
      className={classnames([
        'layer',
        {
          [`fill--${fill}`]: fill,
          [`stroke--${stroke}`]: stroke,
          'layer--fullWidth': fullWidth,
          'layer--hover': hasHover,
          'layer--disabled': disabled
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Layer.propTypes = {
  fill: PropTypes.oneOfType([
    PropTypes.oneOf([
      'black',
      'white',
      'background',
      'paper',
      'grey-90',
      'grey-80',
      'grey-70',
      'grey-60',
      'grey-50',
      'grey-40',
      'grey-30',
      'grey-20',
      'grey-10',
      'grey-5',
      'primary',
      'secondary',
      'highlight',
      'success',
      'info',
      'warning',
      'error'
    ]),
    PropTypes.string
  ]),
  stroke: PropTypes.oneOfType([
    PropTypes.oneOf([
      'black',
      'white',
      'background',
      'paper',
      'grey-90',
      'grey-80',
      'grey-70',
      'grey-60',
      'grey-50',
      'grey-40',
      'grey-30',
      'grey-20',
      'grey-10',
      'grey-5',
      'primary',
      'secondary',
      'highlight',
      'success',
      'info',
      'warning',
      'error'
    ]),
    PropTypes.string
  ]),
  custom: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hasHover: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}

Layer.defaultProps = {
  fullWidth: false
}
