import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const SectionHeader = ({
  label,
  title,
  subtitle,
  subheader,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'section__header',
        {
          'section__header--subheader': subheader
        },
        className
      ])}
      {...props}
    >
      {label ? <Text variant={subheader ? 'overline' : 'caption'} weight='bold' className={classnames('section__label')}>{label}</Text> : null }
      {title ? <Text variant={subheader ? 'h6' : 'h3'} color='primary' className={classnames('section__title')}>{title}</Text> : null }
      {subtitle ? <Text variant={subheader ? 'body' : 'subtitle'} className={classnames('section__subtitle')}>{subtitle}</Text> : null }
    </div>
  )
}

SectionHeader.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subheader: PropTypes.bool,
  className: PropTypes.bool
}

SectionHeader.defaultProps = {
  subheader: false
}
