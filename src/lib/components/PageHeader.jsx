import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Section } from './Section'
import { Text } from './Text'

export const PageHeader = ({
  align,
  label,
  title,
  subtitle,
  isLanding,
  className,
  ...props
}) => {
  return (
    <Section
      className={classnames([
        'page__header',
        className
      ])}
      align={align}
      {...props}
    >
      {label ? <Text variant="caption" weight='bold' className={classnames('page__label')}>{label}</Text> : null }
      {title ? <Text variant={isLanding ? 'h1' : 'h2'} color="primary" className={classnames('page__title')}>{title}</Text> : null }
      {subtitle ? <Text variant={isLanding ? 'h5' : 'h6'} weight="regular" className={classnames('page__subtitle')}>{subtitle}</Text> : null }
    </Section>
  )
}

PageHeader.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isLanding: PropTypes.bool,
  className: PropTypes.node
}

PageHeader.defaultProps = {
  align: 'left',
  isLanding: false
}
