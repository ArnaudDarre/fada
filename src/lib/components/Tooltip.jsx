import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Info } from 'react-feather'

export const Tooltip = ({
  infoIcon,
  infoIconSize,
  content,
  bold,
  dense,
  className,
  children,
  ...props
}) => {

  return (
    <span
      className={classnames([
        'tooltip',
        {
          'tooltip--info': infoIcon,
          'tooltip--bold': bold
        },
        className
      ])}
      {...props}
    >
      {infoIcon ? <Info className={classnames('tooltip__icon')} size={infoIconSize ? infoIconSize : 12} /> : children}
      <span
        className={classnames([
          'tooltip__content',
          {
            'tooltip__content--dense': dense
          }
        ])}
      >
        {content}
      </span>
    </span>
  )
}

Tooltip.propTypes = {
  infoIcon: PropTypes.bool,
  infoIconSize: PropTypes.number,
  content: PropTypes.string,
  bold: PropTypes.bool,
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}

Tooltip.defaultProps = {
}
