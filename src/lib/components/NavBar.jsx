import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Section } from './Section'
import { Text } from './Text'

export const NavBar = ({ className, children, ...props }) => {
  return (
    <nav>
      <Section
        className={classnames([
          'navBar',
          className
        ])}
        {...props}
      >
        <div className={classnames('navBar__logo')}>
          <Text variant='h6' component='h1' color='primary' transform='capitalize'>
            <Link to="/" exact>{`${process.env.REACT_APP_NAME}`}</Link>
          </Text>
        </div>
        <div className={classnames('navBar__nav')}>
          {children}
        </div>
      </Section>
    </nav>
  )
}

NavBar.propTypes = {
  className: PropTypes.node,
  children: PropTypes.any
}
