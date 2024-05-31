import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const ListItem = ({ icon, bold, className, children, ...props }) => {

  return (
    <div
      className={classnames([
        'list__item',
        {
          'list__item--bold': bold
        },
        className
      ])}
      {...props}
    >
      {icon ? <div className={'list__itemIcon'}>{icon}</div> : null }
      <Text weight={bold === true ? 'bold' : ''}>{children}</Text>
    </div>
  )
}

ListItem.propTypes = {
  icon: PropTypes.any,
  bold: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.string
}

ListItem.defaultProps = {
  children: 'List item'
}
