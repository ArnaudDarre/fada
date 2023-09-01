import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from './Text'

export const Detail = ({ icon, bold, className, children, ...props }) => {

  return (
    <div
      className={classnames([
        'detail',
        {
          'detail--bold': bold
        },
        className
      ])}
      {...props}
    >
      {icon ? <div className={'detail__icon'}>{icon}</div> : null }
      <Text variant="overline" weight={bold === true ? 'bold' : ''}>{children}</Text>
    </div>
  )
}

Detail.propTypes = {
  icon: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.string
}

Detail.defaultProps = {
  bold: false,
  children: 'Detail'
}
