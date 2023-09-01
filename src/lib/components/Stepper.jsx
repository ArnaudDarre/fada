import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Check } from 'react-feather'

import { Text } from './Text'

export const Stepper = ({ showLabel, children }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1)
    setCompletedSteps(prevSteps => [...prevSteps, activeStep])
  }

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1)
  }

  const handleSkip = () => {
    setActiveStep(prevStep => prevStep + 1)
    setCompletedSteps(prevSteps => [...prevSteps, activeStep])
  }

  const isLastStep = activeStep === React.Children.count(children) - 1

  return (
    <div className={classnames('stepper')}>
      <div className={classnames('stepper__icons')}>
        {React.Children.map(children, (child, index) => {
          const { label } = child.props
          const isActive = index === activeStep
          const isCompleted = completedSteps.includes(index)
          return (
            <div
              key={index}
              className={classnames('stepper__step')}
            >
              <span
                className={classnames([
                  'stepper__icon',
                  {
                    'stepper__icon--completed': isCompleted,
                    'stepper__icon--active': isActive
                  }
                ])}
              >
                {isCompleted ? <Check size={20} /> : index + 1}
              </span>
              {showLabel ? <Text variant="caption" weight='bold' className={classnames('stepper__label')}>{label}</Text> : null}
            </div>
          )
        })}
      </div>
      {React.Children.map(children, (child, index) => {
        if (index === activeStep) {
          return React.cloneElement(child, {
            active: true,
            onNext: handleNext,
            onBack: handleBack,
            onSkip: handleSkip,
            isFirstStep: index === 0,
            isLastStep: isLastStep
          })
        }
        return null
      })}
    </div>
  )
}

Stepper.propTypes = {
  showLabel: PropTypes.bool,
  children: PropTypes.node.isRequired
}
