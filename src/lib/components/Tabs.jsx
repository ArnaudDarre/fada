import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const TabContext = createContext()

export const Tabs = ({
  children,
  activeTab,
  setActiveTab
}) => {

  return (
    <TabContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </TabContext.Provider>
  )
}

Tabs.propTypes = {
  children: PropTypes.any,
  activeTab: PropTypes.any,
  setActiveTab: PropTypes.any
}
