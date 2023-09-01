import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Layer } from './Layer'
import { SectionHeader } from './SectionHeader'

export const Section = ({
  fill,
  align,
  fullWidth,
  label,
  title,
  subtitle,
  className,
  children,
  ...props
}) => {
  return (
    <Layer
      className={classnames([
        'section',
        {
          'section--fill': fill,
          'section--fullWidth': fullWidth
        },
        className
      ])}
      fill={fill}
      {...props}
    >
      <div
        className={classnames(
          'section__container',
          {
            [`section--${align}`]: align,
            'section--fullWidth': fullWidth
          }
        )}
      >
        {label || title || subtitle ? (
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
          />
        ) : null }
        {children ? (
          <div className={classnames('section__content')}>
            {children}
          </div>
        ) : null}
      </div>
    </Layer>
  )
}

Section.propTypes = {
  fill: PropTypes.oneOf([
    'black',
    'white',
    'background',
    'paper',
    'overlay',
    'primary',
    'secondary',
    'highlight'
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.any
}

Section.defaultProps = {
  align: 'left'
}
