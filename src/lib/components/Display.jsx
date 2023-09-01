import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Display = ({ show, hide, viewport, children }) => {

  let viewportValue

  if (viewport === 'mobile-sm') { viewportValue = 375 }
  else if (viewport === 'mobile') { viewportValue = 576 }
  else if (viewport === 'tablet') { viewportValue = 768 }
  else if (viewport === 'laptop') { viewportValue = 1024 }
  else if (viewport === 'desktop') { viewportValue = 1280 }

  const [isDisplayed, setDisplayed] = useState(window.innerWidth > viewportValue)

  const updateMedia = () => {
    if (show === true) {
      setDisplayed(window.innerWidth <= viewportValue)
    } else if (hide === true) {
      setDisplayed(window.innerWidth > viewportValue)
    }
  }

  useEffect(() => {
    window.onload = function () { window.addEventListener('load', updateMedia) } // needed for IE support
    window.addEventListener('load', updateMedia) // needed for IE and other browser support
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <>
      { isDisplayed ? ( children ) : null }
    </>
  )
}

Display.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.bool,
  viewport: PropTypes.oneOf([
    'mobile-sm',
    'mobile',
    'tablet',
    'laptop',
    'desktop'
  ]),
  children: PropTypes.any
}
