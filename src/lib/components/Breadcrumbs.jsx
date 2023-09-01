import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ChevronRight } from 'react-feather'

import { Text } from './Text'

export const Breadcrumbs = ({
  // steps,
  className,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'breadcrumbs',
        className
      ])}
      {...props}
    >
      {/* {tabs.map((tab, i) => (
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
      ))} */}
      {/* {steps.map((step, i) => (
        <Text key={i} variant='caption' className={classnames('breadcrumbs__item')}>
          <ChevronRight className={classnames('breadcrumbs__separator')} size={14} />
          {step.label}
        </Text>
      ))} */}
      <Text className={classnames('breadcrumbs__item')}>Step 1</Text>
      <Text variant='caption' className={classnames('breadcrumbs__item')}>
        <ChevronRight className={classnames('breadcrumbs__separator')} size={14} />
        Step 2
      </Text>
      <Text variant='caption' className={classnames('breadcrumbs__item')}>
        <ChevronRight className={classnames('breadcrumbs__separator')} size={14} />
        Step 3
      </Text>
    </div>
  )
}

Breadcrumbs.propTypes = {
  // steps: PropTypes.array,
  className: PropTypes.node
}

Breadcrumbs.defaultProps = {
}
