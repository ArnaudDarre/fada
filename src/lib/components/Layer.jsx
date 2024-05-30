import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Layer = ({
  fill,
  stroke,
  customFill,
  customStroke,
  hasHover,
  className,
  children,
  ...props
}) => {

  const style = {
    ...(customFill ? { backgroundColor: `${customFill}` } : {}),
    ...(customStroke ? { border: `1px solid ${customStroke}` } : {})
  }

  return (
    <div
      style={style}
      className={classnames([
        'layer',
        {
          [`fill--${fill}`]: fill,
          [`stroke--${stroke}`]: stroke,
          'layer--hover': hasHover
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
  fill: PropTypes.oneOf([
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
  stroke: PropTypes.oneOf([
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
  customFill: PropTypes.string,
  customStroke: PropTypes.string,
  hasHover: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}
