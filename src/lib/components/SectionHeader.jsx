import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const SectionHeader = ({
  label,
  title,
  subtitle,
  dense,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'section__header',
        {
          'section__header--dense': dense
        },
        className
      ])}
      {...props}
    >
      {label ? <Text className={classnames('section__label')}>{label}</Text> : null }
      {title ? <Text className={classnames('section__title')}>{title}</Text> : null }
      {subtitle ? <Text className={classnames('section__subtitle')}>{subtitle}</Text> : null }
    </div>
  )
}

SectionHeader.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dense: PropTypes.bool,
  className: PropTypes.bool
}
