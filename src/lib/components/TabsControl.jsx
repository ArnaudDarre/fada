import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { TabContext } from './Tabs'

export const TabsControl = ({ tabs, dense, direction }) => {
  const [activeTab, setActiveTab] = useContext(TabContext)

  return (
    <div
      className={classnames([
        'tabs__control',
        {
          [`tabs__control--${direction}`]: direction,
          'tabs__control--dense': dense
        }
      ])}
    >
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => { setActiveTab(tab.label) }}
          className={classnames([
            'tabs__item',
            {
              'tabs__item--isActive': tab.label === activeTab
            }
          ])}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

TabsControl.propTypes = {
  tabs: PropTypes.any,
  dense: PropTypes.bool,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ])
}

TabsControl.defaultProps = {
  direction: 'landscape'
}
