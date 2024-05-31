import React, { useEffect, useState } from 'react'
// import ReactDom from 'react-dom'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { X } from '@phosphor-icons/react'

import { Text } from './Text'

export const Alert = ({
  type,
  variant,
  title,
  subtitle,
  dense,
  show,
  onClose,
  className,
  ...props
}) => {

  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  let alert = (
    <div
      className={classnames([
        'alert',
        {
          [`alert--${type}`]: type,
          [`alert--${variant}`]: variant,
          'alert--slideIn': show,
          'alert--slideOut': !show,
          'alert--dense': dense
        },
        className
      ])}
      onAnimationEnd={onAnimationEnd}
      {...props}
    >
      <div className={classnames('alert__content')}>
        {title ? <Text className={classnames('alert__title')} variant={dense ? 'caption' : 'body'}  weight='bold'>{title}</Text> : null}
        {subtitle ? <Text variant={dense ? 'overline' : 'caption'} className={classnames('alert__subtitle')}>{subtitle}</Text> : null}
      </div>
      {onClose ? (
        <X className={classnames('alert__close')} onClick={onClose} size={dense ? 14 : 16} />
      ) : null}
    </div>
  )

  if (variant === 'notice') {
    return (
      <>{alert}</>
    )
  } else {
    // return ReactDom.createPortal(
    return createPortal(
      shouldRender && (
        <>{alert}</>
      ),
      document.getElementById('alerts')
    )
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'error'
  ]),
  variant: PropTypes.oneOf([
    'bar',
    'toast',
    'notice'
  ]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dense: PropTypes.bool,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.node
}

Alert.defaultProps = {
  type: 'success',
  variant: 'toast'
}
