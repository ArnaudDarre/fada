import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { SectionHeader } from './SectionHeader'

export const Section = ({
  align,
  color,
  landing,
  header,
  label,
  title,
  subtitle,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'section',
        {
          [`section--${align}`]: align,
          [`section--${color}`]: color,
          'section--landing': landing,
          'section--header': header
        },
        className
      ])}
      {...props}
    >
      <div className={'section__container'}>
        {label || title || subtitle ? (
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
          />
        ) : null }
        {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  color: PropTypes.oneOf([
    'default',
    'paper',
    'primary',
    'primaryLight'
  ]),
  landing: PropTypes.bool,
  header: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.any
}

Section.defaultProps = {
  align: 'left'
}
