import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Grid = ({
  wrapper,
  item,
  direction,
  justifyContent,
  alignItems,
  alignSelf,
  flexGrow,
  col,
  spacing,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames(
        'grid',
        {
          [`grid--${direction}`]: direction,
          [`grid--jc-${justifyContent}`]: justifyContent,
          [`grid--ai-${alignItems}`]: alignItems,
          [`grid--as-${alignSelf}`]: alignSelf,
          [`grid--fg-${flexGrow}`]: flexGrow,
          [`grid--col-${col}`]: col,
          [`grid--spacing-${spacing}`]: spacing,
          'grid--wrapper': wrapper,
          'grid__item': item
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  wrapper: PropTypes.bool,
  item: PropTypes.bool,
  direction: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse'
  ]),
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly'
  ]),
  alignItems: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-end',
    'flex-start',
    'baseline'
  ]),
  alignSelf: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-end',
    'flex-start',
    'baseline'
  ]),
  flexGrow: PropTypes.oneOf([
    0,
    1,
    'auto'
  ]),
  col: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  spacing: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  className: PropTypes.node,
  children: PropTypes.any
}

Grid.defaultProps = {
  direction: 'row'
}
