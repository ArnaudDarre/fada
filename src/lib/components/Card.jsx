import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Layer } from './Layer'

export const SizeContext = createContext('md')
export const PaddingContext = createContext(false)
export const DirectionContext = createContext('portrait')

export const Card = ({
  size,
  fill,
  direction,
  align,
  noPadding,
  hasShadow,
  transparent,
  className,
  children,
  ...props
}) => {

  return (
    <SizeContext.Provider value={size}>
      <PaddingContext.Provider value={noPadding}>
        <DirectionContext.Provider value={direction}>
          <Layer
            className={classnames([
              'card',
              {
                [`card--${size}`]: size,
                [`card--${direction}`]: direction,
                [`card--${align}`]: align,
                'card--hasShadow': hasShadow,
                'card--transparent': transparent
              },
              className
            ])}
            fill={transparent || noPadding ? null : fill}
            {...props}
          >
            {children}
          </Layer>
        </DirectionContext.Provider>
      </PaddingContext.Provider>
    </SizeContext.Provider>
  )
}

Card.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  fill: PropTypes.oneOf([
    'black',
    'white',
    'background',
    'paper',
    'primary',
    'secondary',
    'highlight',
    'success',
    'info',
    'warning',
    'error'
  ]),
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  noPadding: PropTypes.bool,
  hasShadow: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.any
}

Card.defaultProps = {
  size: 'md',
  fill: 'paper',
  direction: 'portrait',
  align: 'left',
  noPadding: false,
  hasShadow: false,
  transparent: false
}
