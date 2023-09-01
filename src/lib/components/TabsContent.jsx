import React, { useContext } from 'react'

import { TabContext } from './Tabs'

export const TabsContent = ({ tabs }) => {
  const [activeTab] = useContext(TabContext)

  return (
    tabs.map((tab, i) => {
      if (tab.label === activeTab) {
        return (
          <div key={i}>
            {tab.content}
          </div>
        )
      } else {
        return null
      }
    })
  )
}
