import React, { useContext, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CaretDown } from '@phosphor-icons/react'

import { SizeContext } from './Accordion'

import { Text } from './Text'

export const AccordionItem = ({
  icon,
  label,
  active,
  disabled,
  onClick,
  className,
  children
}) => {

  const useSize = () => useContext(SizeContext)
  const size = useSize()

  let labelVariant

  if (size === 'sm') {
    labelVariant = 'caption'
  } else if (size === 'md') {
    labelVariant = 'body'
  } else if (size === 'lg') {
    labelVariant = 'subtitle'
  }

  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (active) {
      setContentHeight(contentRef.current.scrollHeight)
    } else {
      setContentHeight(0)
    }
  }, [active])

  const contentStyle = {
    height: `${contentHeight}px`
  }

  const handleClick = () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <div
      className={classnames([
        'accordion__item',
        {
          'accordion__item--active': active,
          'accordion__item--disabled': disabled
        },
        className
      ])}
    >
      <button
        className={classnames([
          'accordion__control'
        ])}
        onClick={disabled ? handleClick : onClick}
      >
        {icon ? <div className={'accordion__icon'}>{icon}</div> : null}
        <Text className={'accordion__header'} variant={labelVariant} weight='bold'>{label}</Text>
        <div className={classnames('accordion__icon accordion__icon--arrow')}><CaretDown /></div>
      </button>
      <div style={contentStyle} ref={contentRef} className={classnames('accordion__content')}>
        {children}
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.node,
  children: PropTypes.node
}

AccordionItem.defaultProps = {
  textVariant: 'body',
  label: 'Accordion control',
  children: 'Accordion content'
}
