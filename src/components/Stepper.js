// src/components/Stepper.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <h3>{steps[currentStep]}</h3>
      <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stepper;
