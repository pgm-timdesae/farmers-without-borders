import React, { useState } from 'react'
import { Formik } from 'formik';

const MultiStepForm = ({children, initialValues, onSubmit, ...props}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);

  const [snapshot, setSnapShot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapShot(values);
    setStepNumber(stepNumber + 1);
  }

  const previous = (values) => {
    setSnapShot(values);
    setStepNumber(stepNumber - 1);
  }

  const handleSubmit = async (values, actions) => {
    
    if (step.props.onSubmit) {
      await step.props.onSubmit(values)
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return <div>
    <Formik 
      initialValues={snapshot} 
      onSubmit={handleSubmit} 
      validationSchema={step.props.validationSchema}>
      {formik => <form onSubmit={formik.handleSubmit}></form>}
    </Formik>
  </div>;
}

export default MultiStepForm

export const FormStep = ({stepName = '', children}) => children;