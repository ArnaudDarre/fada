import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Section } from './Section'
import { Text } from './Text'

export const NavBar = ({ align, className, children, ...props }) => {
  return (
    <header>
      <Section
        className={classnames([
          'navbar',
          {
            [`navbar--${align}`]: align
          },
          className
        ])}
        {...props}
      >
        <div className="navbar__main">
          <div className='navbar__logo'>
            <Text variant='h6' component='h1' color='primary' transform='capitalize'>
              <Link to="/" exact>{`${process.env.REACT_APP_NAME}`}</Link>
            </Text>
          </div>
        </div>
        <div className='navbar__nav nav'>
          <div className='nav__container'>
            {children}
          </div>
        </div>
      </Section>
    </header>
  )
}

NavBar.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'right'
  ]),
  className: PropTypes.node,
  children: PropTypes.any
}
